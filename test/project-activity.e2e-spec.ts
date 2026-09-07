/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import type { Server } from 'http';
import request from 'supertest';
import * as jwt from 'jsonwebtoken';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/services/prisma.service';

interface GqlResult {
  errors?: Array<{ message: string }>;
  data?: Record<string, any>;
}

/**
 * Project Activities: CRUD, status changes, batch update, audit logs,
 * and permission checks per role.
 */
describe('Project Activities (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  let httpServer: Server;

  const ids = {
    institution: '',
    department: '',
    adminUser: '',
    collaborator: '',
    memberUser: '',
    projectId: '',
    activityId: '',
    activity2Id: '',
  };

  function tokenFor(userId: string): string {
    return jwt.sign({ sub: userId }, process.env.JWT_SECRET!, { expiresIn: '1h' });
  }

  async function gql(token: string | null, query: string, variables?: Record<string, unknown>): Promise<GqlResult> {
    const req = request(httpServer).post('/graphql').send({ query, variables });
    if (token) req.set('Authorization', `Bearer ${token}`);
    const res = await req;
    return res.body as GqlResult;
  }

  async function createRole(userId: string, roleKeyCode: string): Promise<void> {
    const role = await prisma.role.findUniqueOrThrow({ where: { key_code: roleKeyCode } });
    await prisma.userRole.create({
      data: { user_id: userId, role_id: role.id, created_by: 'e2e-test', updated_by: 'e2e-test' },
    });
  }

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({ imports: [AppModule] }).compile();
    app = moduleRef.createNestApplication();
    await app.init();
    httpServer = app.getHttpServer();
    prisma = app.get(PrismaService);

    const inst = await prisma.institution.create({
      data: { name: 'E2E Activity Institution', denomination: 'e2e-test', language_preference: 'en', created_by: 'e2e-test', updated_by: 'e2e-test' },
    });
    ids.institution = inst.id;

    const dept = await prisma.department.create({
      data: { name: 'E2E Activity Dept', description: 'e2e-test', institution_id: inst.id, created_by: 'e2e-test', updated_by: 'e2e-test' },
    });
    ids.department = dept.id;

    const ts = Date.now();
    const mkUser = async (name: string) => {
      const u = await prisma.user.create({
        data: {
          name,
          email: `${name.toLowerCase().replace(/\s+/g, '.')}.${ts}@e2e-activity.local`,
          password: 'unused',
          language_preference: 'en',
          institution_id: inst.id,
          created_by: 'e2e-test',
          updated_by: 'e2e-test',
        },
      });
      return u.id;
    };

    ids.adminUser = await mkUser('E2E Activity Admin');
    ids.collaborator = await mkUser('E2E Activity Collaborator');
    ids.memberUser = await mkUser('E2E Activity Member');

    await createRole(ids.adminUser, 'ADMIN');
    await createRole(ids.collaborator, 'PROJECT_COLLABORATOR');
    await createRole(ids.memberUser, 'CHURCH_MEMBER');

    // Create a project to attach activities to
    const project = await prisma.project.create({
      data: {
        title: 'E2E Activity Project',
        institution_id: inst.id,
        department_id: dept.id,
        description: 'For activity tests',
        budget: 10000,
        type: 'Local',
        language_preference: 'nl',
        start_at: new Date('2099-01-01'),
        end_at: new Date('2099-12-31'),
                created_by: 'e2e-test',
        updated_by: 'e2e-test',
        owner_id: ids.adminUser,
      },
    });
    ids.projectId = project.id;
  }, 60000);

  afterAll(async () => {
    const userIds = [ids.adminUser, ids.collaborator, ids.memberUser];
    await prisma.projectActivityLog.deleteMany({ where: { activity: { project_id: ids.projectId } } });
    await prisma.activityFunding.deleteMany({ where: { activity: { project_id: ids.projectId } } });
    await prisma.projectActivity.deleteMany({ where: { project_id: ids.projectId } });
    await prisma.project.deleteMany({ where: { id: ids.projectId } });
    await prisma.department.deleteMany({ where: { id: ids.department } });
    await prisma.userRole.deleteMany({ where: { user_id: { in: userIds } } });
    await prisma.user.deleteMany({ where: { id: { in: userIds } } });
    await prisma.institution.deleteMany({ where: { id: ids.institution } });
    await app.close();
  }, 60000);

  // ─── GraphQL strings ─────────────────────────────────────────────────────

  const CREATE_ACTIVITY = `
    mutation CreateActivity($input: ProjectActivityCreateDto!) {
      createProjectActivity(input: $input) { id name status budget_amount }
    }
  `;
  const UPDATE_ACTIVITY = `
    mutation UpdateActivity($input: ProjectActivityUpdateDto!) {
      updateProjectActivity(input: $input) { id name status }
    }
  `;
  const DELETE_ACTIVITY = `
    mutation DeleteActivity($id: ID!) {
      deleteProjectActivity(id: $id) { id is_deleted }
    }
  `;
  const BATCH_UPDATE = `
    mutation BatchUpdate($data: ProjectActivityBatchUpdateDto!) {
      batchUpdateProjectActivities(data: $data) { id status }
    }
  `;
  const ACTIVITY_LOGS = `
    query ActivityLogs($activityId: ID!) {
      projectActivityLogs(activityId: $activityId) { id field_name new_value }
    }
  `;
  const PROJECT_ACTIVITIES = `
    query Activities($filters: String) {
      projectActivities(filters: $filters) { id name project_id }
    }
  `;

  // ─── Create ──────────────────────────────────────────────────────────────

  it('Admin can create a project activity', async () => {
    const res = await gql(tokenFor(ids.adminUser), CREATE_ACTIVITY, {
      input: {
        name: 'E2E Activity 1',
        project_id: ids.projectId,
        status: 'TODO',
        budget_amount: 1000,
        description: 'First activity',
        deadline: new Date('2027-12-31').toISOString(),
        tags: ['EQUIPMENT'],
        activity_funding: {
          entity_contribution_amount: 0,
          entity_contribution_percent: 0,
          entity_type: 'CHURCH_DEPARTMENT',
          entity_id: ids.projectId,
        }
      },
    });
    expect(res.errors).toBeUndefined();
    ids.activityId = res.data!.createProjectActivity.id;
    expect(ids.activityId).toBeTruthy();
    expect(res.data!.createProjectActivity.status).toBe('TODO');
  });

  it('Admin can create a second activity', async () => {
    const res = await gql(tokenFor(ids.adminUser), CREATE_ACTIVITY, {
      input: {
        name: 'E2E Activity 2',
        project_id: ids.projectId,
        status: 'TODO',
        budget_amount: 500,
        description: 'Second activity',
        deadline: new Date('2027-12-31').toISOString(),
        tags: ['EQUIPMENT'],
        activity_funding: {
          entity_contribution_amount: 0,
          entity_contribution_percent: 0,
          entity_type: 'CHURCH_DEPARTMENT',
          entity_id: ids.projectId,
        }
      },
    });
    expect(res.errors).toBeUndefined();
    ids.activity2Id = res.data!.createProjectActivity.id;
  });

  it('Collaborator can create an activity', async () => {
    const res = await gql(tokenFor(ids.collaborator), CREATE_ACTIVITY, {
      input: {
        name: 'E2E Collaborator Activity',
        project_id: ids.projectId,
        status: 'TODO',
        budget_amount: 200,
        description: 'Collab activity',
        deadline: new Date('2027-12-31').toISOString(),
        tags: ['EQUIPMENT'],
        activity_funding: {
          entity_contribution_amount: 0,
          entity_contribution_percent: 0,
          entity_type: 'CHURCH_DEPARTMENT',
          entity_id: ids.projectId,
        }
      },
    });
    expect(res.errors).toBeUndefined();
  });

  it('Church Member without PROJECT_ACTIVITY_CREATE cannot create activities', async () => {
    const res = await gql(tokenFor(ids.memberUser), CREATE_ACTIVITY, {
      input: {
        name: 'Unauthorized Activity',
        project_id: ids.projectId,
        status: 'TODO',
        budget_amount: 100,
        description: 'Unauthorized activity',
        deadline: new Date('2027-12-31').toISOString(),
        tags: ['EQUIPMENT'],
        activity_funding: {
          entity_contribution_amount: 0,
          entity_contribution_percent: 0,
          entity_type: 'CHURCH_DEPARTMENT',
          entity_id: ids.projectId,
        }
      },
    });
    expect(res.errors).toBeDefined();
    expect(res.errors![0].message).toMatch(/permission/i);
  });

  // ─── Read ────────────────────────────────────────────────────────────────

  it('Admin can list project activities by filter', async () => {
    const res = await gql(tokenFor(ids.adminUser), PROJECT_ACTIVITIES, {
      filters: JSON.stringify({ project_id: ids.projectId }),
    });
    expect(res.errors).toBeUndefined();
    const found = res.data!.projectActivities.find((a: any) => a.id === ids.activityId);
    expect(found).toBeDefined();
  });

  // ─── Update & Status Transitions ─────────────────────────────────────────

  it('Admin can update an activity to IN_PROGRESS', async () => {
    const res = await gql(tokenFor(ids.adminUser), UPDATE_ACTIVITY, {
      input: { id: ids.activityId, name: 'E2E Activity 1 (updated)', status: 'IN_PROGRESS' },
    });
    expect(res.errors).toBeUndefined();
    expect(res.data!.updateProjectActivity.status).toBe('IN_PROGRESS');
  });

  it('Admin can mark an activity as COMPLETED', async () => {
    const res = await gql(tokenFor(ids.adminUser), UPDATE_ACTIVITY, {
      input: { id: ids.activityId, status: 'COMPLETED' },
    });
    expect(res.errors).toBeUndefined();
    expect(res.data!.updateProjectActivity.status).toBe('COMPLETED');
  });

  // ─── Audit Logs ──────────────────────────────────────────────────────────

  it('Admin can read activity audit logs', async () => {
    const res = await gql(tokenFor(ids.adminUser), ACTIVITY_LOGS, { activityId: ids.activityId });
    expect(res.errors).toBeUndefined();
    // Should have at least 1 log for the status change
    expect(res.data!.projectActivityLogs.length).toBeGreaterThanOrEqual(1);
    const statusLog = res.data!.projectActivityLogs.find((l: any) => l.field_name === 'status');
    expect(statusLog).toBeDefined();
  });

  // ─── Batch Update ────────────────────────────────────────────────────────

  it('Admin can batch update multiple activities', async () => {
    const res = await gql(tokenFor(ids.adminUser), BATCH_UPDATE, {
      data: {
        ids: [ids.activityId, ids.activity2Id],
        status: 'COMPLETED',
      },
    });
    expect(res.errors).toBeUndefined();
    expect(res.data!.batchUpdateProjectActivities.length).toBe(2);
  });

  // ─── Delete ──────────────────────────────────────────────────────────────

  it('Admin can soft-delete a project activity', async () => {
    const res = await gql(tokenFor(ids.adminUser), DELETE_ACTIVITY, { id: ids.activity2Id });
    expect(res.errors).toBeUndefined();
    expect(res.data!.deleteProjectActivity.is_deleted).toBe(true);
    ids.activity2Id = '';
  });
});
