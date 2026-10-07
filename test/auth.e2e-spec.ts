/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import type { Server } from 'http';
import request from 'supertest';
import * as bcrypt from 'bcryptjs';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/services/prisma.service';

interface GqlResult {
  errors?: Array<{ message: string }>;
  data?: Record<string, any>;
}

describe('Auth (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  let httpServer: Server;
  let testUserId: string;

  const TEST_EMAIL = `e2e.auth.${Date.now()}@e2e-test.local`;
  const TEST_PASSWORD = 'e2e-password-123';

  async function gql(query: string, variables?: Record<string, unknown>): Promise<GqlResult> {
    const res = await request(httpServer).post('/graphql').send({ query, variables });
    return res.body as GqlResult;
  }

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({ imports: [AppModule] }).compile();
    app = moduleRef.createNestApplication();
    await app.init();
    httpServer = app.getHttpServer();
    prisma = app.get(PrismaService);

    const institution = await prisma.institution.findFirstOrThrow({ where: { is_deleted: false } });

    const user = await prisma.user.create({
      data: {
        name: 'E2E Auth User',
        email: TEST_EMAIL,
        password: bcrypt.hashSync(TEST_PASSWORD, 10),
        language_preference: 'en',
        institution_id: institution.id,
        created_by: 'e2e-test',
        updated_by: 'e2e-test',
      },
    });
    testUserId = user.id;

    // The login service requires at least one active role
    const role = await prisma.role.findUniqueOrThrow({ where: { key_code: 'CHURCH_MEMBER' } });
    await prisma.userRole.create({
      data: { user_id: testUserId, role_id: role.id, created_by: 'e2e-test', updated_by: 'e2e-test' },
    });
  }, 60000);

  afterAll(async () => {
    await prisma.userRole.deleteMany({ where: { user_id: testUserId } });
    await prisma.user.deleteMany({ where: { id: testUserId } });
    await app.close();
  }, 30000);

  const LOGIN = `
    mutation Login($input: LoginInput!) {
      login(input: $input) {
        accessToken
        expiresIn
        user { id email name }
      }
    }
  `;

  it('returns a JWT token for valid credentials', async () => {
    const res = await gql(LOGIN, { input: { email: TEST_EMAIL, password: TEST_PASSWORD } });
    expect(res.errors).toBeUndefined();
    expect(res.data!.login.accessToken).toBeTruthy();
    expect(res.data!.login.user.email).toBe(TEST_EMAIL);
  });

  it('rejects wrong password', async () => {
    const res = await gql(LOGIN, { input: { email: TEST_EMAIL, password: 'wrongpassword' } });
    expect(res.errors).toBeDefined();
    // The exact message depends on the auth service implementation
    expect(res.errors!.length).toBeGreaterThan(0);
  });

  it('rejects non-existent email', async () => {
    const res = await gql(LOGIN, { input: { email: 'nobody@e2e-test.local', password: TEST_PASSWORD } });
    expect(res.errors).toBeDefined();
  });

  it('rejects empty email', async () => {
    const res = await gql(LOGIN, { input: { email: '', password: TEST_PASSWORD } });
    expect(res.errors).toBeDefined();
  });
});
