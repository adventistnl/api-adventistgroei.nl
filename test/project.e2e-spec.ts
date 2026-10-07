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
 * Projects: CRUD, co-owner assignment, volunteers, myProjects, KPIs,
 * and permission checks (CHURCH_MEMBER can create but not manage others' projects).
 */
describe('Projects (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  let httpServer: Server;

  const ids = {
    institution: '',
    department: '',
    adminUser: '',
    deptLeader: '',
    memberUser: '',
    projectId: '',
    volunteerProjectId: '',
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
      data: { name: 'E2E Projects Institution', denomination: 'e2e-test', language_preference: 'en', created_by: 'e2e-test', updated_by: 'e2e-test' },
    });
    ids.institution = inst.id;

    const dept = await prisma.department.create({
      data: { name: 'E2E Projects Dept', description: 'e2e-test', institution_id: inst.id, created_by: 'e2e-test', updated_by: 'e2e-test' },
    });
    ids.department = dept.id;

    const perms = ['updateProjectCoOwner', 'addProjectVoluntary', 'removeProjectVoluntary', 'deleteProject'];
    const adminRole = await prisma.role.findUnique({ where: { key_code: 'ADMIN' } });
    if (adminRole) {
      for (const p of perms) {
        let perm = await prisma.permission.findUnique({ where: { resolver_name: p as any } });
        if (!perm) {
          perm = await prisma.permission.create({ data: { key_code: p, name: p, description: p, resolver_name: p as any, created_by: 'e2e', updated_by: 'e2e' } });
        }
        const existingRp = await prisma.rolePermission.findFirst({
          where: { role_id: adminRole.id, permission_id: perm.id }
        });
        if (!existingRp) {
          await prisma.rolePermission.create({
            data: { role_id: adminRole.id, permission_id: perm.id, created_by: 'e2e', updated_by: 'e2e' }
          });
        }
      }
    }
    const cmRole = await prisma.role.findUnique({ where: { key_code: 'CHURCH_MEMBER' } });
    const dpPerm = await prisma.permission.findUnique({ where: { key_code: 'deleteProject' } });
    if (cmRole && dpPerm) {
      await prisma.rolePermission.deleteMany({ where: { role_id: cmRole.id, permission_id: dpPerm.id } });
    }


    const ts = Date.now();
    const mkUser = async (name: string) => {
      const u = await prisma.user.create({
        data: {
          name,
          email: `${name.toLowerCase().replace(/\s+/g, '.')}.${ts}@e2e-projects.local`,
          password: 'unused',
          language_preference: 'en',
          institution_id: inst.id,
          created_by: 'e2e-test',
          updated_by: 'e2e-test',
        },
      });
      return u.id;
    };

    ids.adminUser = await mkUser('E2E Projects Admin');
    ids.deptLeader = await mkUser('E2E Projects DeptLeader');
    ids.memberUser = await mkUser('E2E Projects Member');

    await createRole(ids.adminUser, 'ADMIN');
    await createRole(ids.deptLeader, 'INSTITUTIONAL_DEPARTMENT_LEADER');
    await createRole(ids.memberUser, 'CHURCH_MEMBER');
    await prisma.department.update({ where: { id: ids.department }, data: { leader_id: ids.deptLeader } });
  }, 60000);

  afterAll(async () => {
    const userIds = [ids.adminUser, ids.deptLeader, ids.memberUser];
    const projectIds = [ids.projectId, ids.volunteerProjectId].filter(Boolean);
    if (projectIds.length) {
      await prisma.voluntariesOnProjects.deleteMany({ where: { project_id: { in: projectIds } } });
      await prisma.projectHistory.deleteMany({ where: { project_id: { in: projectIds } } });
      await prisma.project.deleteMany({ where: { department_id: ids.department } });
    }
    await prisma.department.deleteMany({ where: { id: ids.department } });
    await prisma.userRole.deleteMany({ where: { user_id: { in: userIds } } });
    await prisma.notification.deleteMany({ where: { user_id: { in: userIds } } });
    await prisma.user.deleteMany({ where: { id: { in: userIds } } });
    await prisma.institution.deleteMany({ where: { id: ids.institution } });
    await app.close();
  }, 60000);

  // ─── Mutations ───────────────────────────────────────────────────────────

  const CREATE_PROJECT = `
    mutation CreateProject($data: ProjectCreateDto!) {
      createProject(data: $data) { id title status }
    }
  `;
  const UPDATE_PROJECT = `
    mutation UpdateProject($id: String!, $data: ProjectUpdateDto!) {
      updateProject(id: $id, data: $data) { id title description status }
    }
  `;
  const UPDATE_CO_OWNER = `
    mutation UpdateCoOwner($id: String!, $data: ProjectUpdateCoOwnerDto!) {
      updateProjectCoOwner(id: $id, data: $data) { id co_owner_id }
    }
  `;
  const DELETE_PROJECT = `
    mutation DeleteProject($id: String!) {
      deleteProject(id: $id) { id is_deleted }
    }
  `;
  const ADD_VOLUNTARY = `
    mutation AddVoluntary($data: AddProjectVoluntaryDto!) {
      addProjectVoluntary(data: $data) { project_id user_id }
    }
  `;
  const REMOVE_VOLUNTARY = `
    mutation RemoveVoluntary($data: RemoveProjectVoluntaryDto!) {
      removeProjectVoluntary(data: $data) { project_id user_id }
    }
  `;
  const PROJECTS = `query Projects($institutionId: String) { projects(institutionId: $institutionId) { id title } }`;
  const MY_PROJECTS = `query { myProjects { id title } }`;

  const PROJECT_KPIS = `
    query ProjectKPIs($institutionId: String) {
      projectKPIs(institutionId: $institutionId) {
        totalProjects activeProjects completedProjects upcomingProjects totalBudget
      }
    }
  `;
  const PROJECTS_BY_DEPARTMENT = `
    query ProjectsByDepartment($institutionId: String) {
      projectsByDepartment(institutionId: $institutionId) {
        department projects budget_used remaining_budget annual_budget
      }
    }
  `;
  const SUBSIDY_STATUS_DISTRIBUTION = `
    query SubsidyStatusDistribution($institutionId: String) {
      subsidyStatusDistribution(institutionId: $institutionId) {
        status count color
      }
    }
  `;
  const PROJECT_TIMELINE = `
    query ProjectsTimeline($institutionId: String) {
      projectsTimeline(institutionId: $institutionId) {
        month created completed budget
      }
    }
  `;
  describe('Criação (Create)', () => {

  it('Department Leader can create a project', async () => {
    const res = await gql(tokenFor(ids.deptLeader), CREATE_PROJECT, {
      data: { language_preference: 'en', type: 'Local', title: 'E2E Test Project',
        institution_id: ids.institution,
        department_id: ids.department,
        description: 'Created in e2e test',
        start_at: '2099-01-01T00:00:00.000Z',
        end_at: '2099-06-30T00:00:00.000Z',
        budget: 5000,
      },
    });
    expect(res.errors).toBeUndefined();
    ids.projectId = res.data!.createProject.id;
    expect(ids.projectId).toBeTruthy();
    expect(res.data!.createProject.status).toBeDefined();
  });

  it('Church Member can also create a project', async () => {
    const res = await gql(tokenFor(ids.memberUser), CREATE_PROJECT, {
      data: { language_preference: 'en', type: 'Local', title: 'E2E Member Project',
        institution_id: ids.institution,
        department_id: ids.department,
        description: 'Member created project',
        start_at: '2099-01-01T00:00:00.000Z',
        end_at: '2099-03-31T00:00:00.000Z',
        budget: 500,
      },
    });
    expect(res.errors).toBeUndefined();
    ids.volunteerProjectId = res.data!.createProject.id;
  });

    });

  describe('Leitura (Read)', () => {

  it('Admin can list all projects in the institution', async () => {
    const res = await gql(tokenFor(ids.adminUser), PROJECTS, { institutionId: ids.institution });
    expect(res.errors).toBeUndefined();
    const found = res.data!.projects.find((p: any) => p.id === ids.projectId);
    expect(found).toBeDefined();
  });

  it('Department Leader can see their own projects via myProjects', async () => {
    const res = await gql(tokenFor(ids.deptLeader), MY_PROJECTS);
    expect(res.errors).toBeUndefined();
    expect(Array.isArray(res.data!.myProjects)).toBe(true);
  });

  });

  describe('Project Analytics & KPIs', () => {
    it('Admin can query project KPIs', async () => {
      const res = await gql(tokenFor(ids.adminUser), PROJECT_KPIS, { institutionId: ids.institution });
      expect(res.errors).toBeUndefined();
      expect(res.data!.projectKPIs).toBeDefined();
      expect(res.data!.projectKPIs.totalProjects).toBeGreaterThanOrEqual(1);
    });

    it('Admin can query projects by department', async () => {
      const res = await gql(tokenFor(ids.adminUser), PROJECTS_BY_DEPARTMENT, { institutionId: ids.institution });
      expect(res.errors).toBeUndefined();
      expect(Array.isArray(res.data!.projectsByDepartment)).toBe(true);
    });

    it('Admin can query subsidy status distribution', async () => {
      const res = await gql(tokenFor(ids.adminUser), SUBSIDY_STATUS_DISTRIBUTION, { institutionId: ids.institution });
      expect(res.errors).toBeUndefined();
      expect(Array.isArray(res.data!.subsidyStatusDistribution)).toBe(true);
    });

    it('Admin can query project timeline', async () => {
      const res = await gql(tokenFor(ids.adminUser), PROJECT_TIMELINE, { institutionId: ids.institution });
      expect(res.errors).toBeUndefined();
      expect(Array.isArray(res.data!.projectsTimeline)).toBe(true);
    });
  });

  describe('Atualização (Update)', () => {

  it('Department Leader can update their project', async () => {
    const res = await gql(tokenFor(ids.deptLeader), UPDATE_PROJECT, {
      id: ids.projectId,
      data: { language_preference: 'en', type: 'Local', title: 'E2E Test Project (updated)', description: 'Updated description' },
    });
    expect(res.errors).toBeUndefined();
    expect(res.data!.updateProject.title).toBe('E2E Test Project (updated)');
  });

  it('Admin can set a co-owner on the project', async () => {
    const res = await gql(tokenFor(ids.adminUser), UPDATE_CO_OWNER, {
      id: ids.projectId,
      data: { co_owner_id: ids.memberUser },
    });
    expect(res.errors).toBeUndefined();
    expect(res.data!.updateProjectCoOwner.co_owner_id).toBe(ids.memberUser);
  });

  // ─── Volunteers ──────────────────────────────────────────────────────────

  it('Admin can add a voluntary to the project', async () => {
    const res = await gql(tokenFor(ids.adminUser), ADD_VOLUNTARY, {
      data: { project_id: ids.projectId, user_id: ids.memberUser },
    });
    expect(res.errors).toBeUndefined();
    expect(res.data!.addProjectVoluntary.project_id).toBe(ids.projectId);
  });

  it('Admin can remove a voluntary from the project', async () => {
    const res = await gql(tokenFor(ids.adminUser), REMOVE_VOLUNTARY, {
      data: { project_id: ids.projectId, user_id: ids.memberUser },
    });
    expect(res.errors).toBeUndefined();
  });

  });

  describe('Exclusão (Delete)', () => {

  it('Church Member cannot delete a project they do not own', async () => {
    const res = await gql(tokenFor(ids.memberUser), DELETE_PROJECT, { id: ids.projectId });
    // memberUser has PROJECT_CREATE but not PROJECT_DELETE on others' projects
    expect(res.errors).toBeDefined();
    expect(res.errors![0].message).toMatch(/permission/i);
  });

  it('Department Leader can delete their own project', async () => {
    const res = await gql(tokenFor(ids.deptLeader), DELETE_PROJECT, { id: ids.projectId });
    expect(res.errors).toBeUndefined();
    expect(res.data!.deleteProject.is_deleted).toBe(true);
    ids.projectId = '';
  });
});
});
