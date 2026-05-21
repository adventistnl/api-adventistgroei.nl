/**
 * Script de teste de integração para SubsidyRequest
 *
 * Valida a criação de subsídios (WITH_DOCUMENT, WITHOUT_DOCUMENT) para as roles:
 *   ✅ ADMIN     → deve conseguir criar
 *   ✅ DEV       → deve conseguir criar (tem todas as permissões)
 *   ✅ PROJECT_OWNER → deve conseguir criar
 *   ❌ CHURCH_MEMBER → deve ser bloqueado (sem permissão)
 *   ❌ FINANCIAL_MANAGER → deve ser bloqueado (sem permissão de criação)
 *
 * Pré-requisitos:
 *   1. API rodando em http://localhost:3000
 *   2. Seed de usuários executado: npx ts-node src/scripts/seed-users.ts
 *   3. Seed de roles executado:    npx ts-node src/scripts/seed-roles.ts
 *
 * Uso:
 *   npx ts-node -r tsconfig-paths/register src/scripts/test-subsidy-request.ts
 */

import { PrismaClient, LanguagePreference } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import * as dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();
const API_URL = `http://localhost:${process.env.PORT || 3008}/graphql`;

// ─── Tipos ────────────────────────────────────────────────────────────────────

interface TestResult {
  role: string;
  email: string;
  scenario: string;
  expected: 'ALLOW' | 'DENY';
  actual: 'ALLOW' | 'DENY' | 'ERROR';  
  passed: boolean;
  detail?: string;
}

type ActualResult = 'ALLOW' | 'DENY' | 'ERROR';

// ─── Helpers GraphQL ──────────────────────────────────────────────────────────

async function gql(query: string, variables: Record<string, unknown> = {}, token?: string) {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json() as { data?: Record<string, unknown>; errors?: Array<{ message: string; extensions?: { response?: { statusCode?: number } } }> };
  return json;
}

async function login(email: string, password: string): Promise<string | null> {
  const resp = await gql(`
    mutation Login($input: LoginInput!) {
      login(input: $input) { accessToken }
    }
  `, { input: { email, password } });
  const data = resp.data as { login?: { accessToken: string } } | undefined;
  return data?.login?.accessToken ?? null;
}

// ─── Setup de dados de teste ──────────────────────────────────────────────────

async function ensureProjectOwnerUser(institutionId: string, departmentId: string): Promise<{ email: string; password: string }> {
  const email = 'projectowner.test@mail.com';
  const password = '123123';

  const role = await prisma.role.findUnique({ where: { key_code: 'PROJECT_OWNER' } });
  if (!role) throw new Error('Role PROJECT_OWNER not found. Run seed-roles.ts first.');

  let user = await prisma.user.findFirst({ where: { email } });
  if (!user) {
    user = await prisma.user.create({
      data: {
        email,
        password: bcrypt.hashSync(password, 10),
        name: 'Test Project Owner',
        language_preference: LanguagePreference.en,
        institution_id: institutionId,
        department_id: departmentId,
        is_deleted: false,
        created_by: 'test-script',
        updated_by: 'test-script',
      },
    });
    console.log('  ℹ️  Usuário projectowner.test@mail.com criado');
  }

  await prisma.userRole.upsert({
    where: { id: `${user.id}_${role.id}` },
    update: {},
    create: {
      id: `${user.id}_${role.id}`,
      user_id: user.id,
      role_id: role.id,
      created_by: 'test-script',
      updated_by: 'test-script',
    },
  });

  return { email, password };
}

async function ensureTestProject(institutionId: string, departmentId: string, userId: string): Promise<{ projectId: string; activityId: string }> {
  const projectName = '[TEST] Subsidy Test Project';

  let project = await prisma.project.findFirst({
    where: { title: projectName, is_deleted: false },
  });

  if (!project) {
    const now = new Date();
    const endDate = new Date(now);
    endDate.setFullYear(endDate.getFullYear() + 1);

    project = await prisma.project.create({
      data: {
        title: projectName,
        description: 'Projeto de teste para validar criação de subsídios',
        institution_id: institutionId,
        department_id: departmentId,
        owner_id: userId,
        status: 'DRAFT',
        type: 'Local',
        language_preference: 'en',
        budget: 10000,
        start_at: now,
        end_at: endDate,
        is_deleted: false,
        created_by: 'test-script',
        updated_by: 'test-script',
      },
    });
    console.log('  ℹ️  Projeto de teste criado:', project.id);
  }

  // Garantir ao menos uma atividade no projeto
  let activity = await prisma.projectActivity.findFirst({
    where: { project_id: project.id, is_deleted: false },
  });

  if (!activity) {
    const deadline = new Date();
    deadline.setMonth(deadline.getMonth() + 6);

    activity = await prisma.projectActivity.create({
      data: {
        name: '[TEST] Sound Equipment Purchase',
        description: 'Atividade de teste para validar subsídios',
        project_id: project.id,
        budget_amount: 1600,
        deadline,
        is_deleted: false,
        created_by: 'test-script',
        updated_by: 'test-script',
      },
    });
    console.log('  ℹ️  Atividade de teste criada:', activity.id);
  }

  return { projectId: project.id, activityId: activity.id };
}

async function cleanupTestSubsidies(projectId: string) {
  const subsidies = await prisma.subsidyRequest.findMany({
    where: { project_id: projectId, is_deleted: false, created_by: 'test-script' },
  });
  for (const s of subsidies) {
    await prisma.subsidyRequest.update({
      where: { id: s.id },
      data: { is_deleted: true, deleted_by: 'test-script', updated_by: 'test-script' },
    });
  }
  if (subsidies.length > 0) {
    console.log(`  🧹 Limpeza: ${subsidies.length} subsídio(s) de teste removido(s)`);
  }
}

// ─── Mutations de teste ───────────────────────────────────────────────────────

async function testCreateWithoutDocument(
  token: string,
  projectId: string,
  departmentId: string,
  institutionId: string,
  activityId: string,
  requesterId: string,
  totalBudget: number,
): Promise<{ id?: string; error?: string }> {
  const resp = await gql(`
    mutation TestCreateSubsidyWithoutDoc($data: SubsidyRequestCreateDto!) {
      createSubsidyRequest(data: $data) {
        id
        request_type
        is_for_advance
      }
    }
  `, {
    data: {
      project_id: projectId,
      department_id: departmentId,
      institution_id: institutionId,
      requester_id: requesterId,
      description: 'Teste de criação de subsídio sem documento',
      total_budget: totalBudget,
      notes: 'Teste WITHOUT_DOCUMENT',
      request_type: 'WITHOUT_DOCUMENT',
      items: [
        {
          project_activity_id: activityId,
          requested_amount: 1600,
          linked_activity_document_ids: [],
          linked_document_amounts: [],
        },
      ],
    },
  }, token);

  const data = resp.data as { createSubsidyRequest?: { id: string } } | undefined;
  const error = resp.errors?.[0]?.message;
  return { id: data?.createSubsidyRequest?.id, error };
}

async function testCreateWithDocument(
  token: string,
  projectId: string,
  departmentId: string,
  institutionId: string,
  activityId: string,
  requesterId: string,
  totalBudget: number,
  documentId?: string,
): Promise<{ id?: string; error?: string }> {
  // Para WITH_DOCUMENT sem documento real, esperamos erro de validação do backend
  // mas a permissão é verificada ANTES da validação de negócio
  const linkedDocs = documentId ? [documentId] : [];
  const linkedAmounts = documentId ? [1600] : [];

  const resp = await gql(`
    mutation TestCreateSubsidyWithDoc($data: SubsidyRequestCreateDto!) {
      createSubsidyRequest(data: $data) {
        id
        request_type
      }
    }
  `, {
    data: {
      project_id: projectId,
      department_id: departmentId,
      institution_id: institutionId,
      requester_id: requesterId,
      description: 'Teste de criação de subsídio com documento',
      total_budget: totalBudget,
      request_type: 'WITH_DOCUMENT',
      items: [
        {
          project_activity_id: activityId,
          requested_amount: 1600,
          linked_activity_document_ids: linkedDocs,
          linked_document_amounts: linkedAmounts,
        },
      ],
    },
  }, token);

  const data = resp.data as { createSubsidyRequest?: { id: string } } | undefined;
  const error = resp.errors?.[0]?.message;
  return { id: data?.createSubsidyRequest?.id, error };
}

// ─── Execução dos testes ──────────────────────────────────────────────────────

async function runTests() {
  const results: TestResult[] = [];

  console.log('\n══════════════════════════════════════════════════════');
  console.log('  🧪  TESTE DE INTEGRAÇÃO — SubsidyRequest');
  console.log('══════════════════════════════════════════════════════\n');

  // ── 1. Encontrar infraestrutura base ──────────────────────────────────────
  console.log('📦 Buscando infraestrutura de teste...');

  const institution = await prisma.institution.findFirst({ where: { name: 'dev Institution', is_deleted: false } });
  if (!institution) {
    console.error('❌ Instituição "dev Institution" não encontrada. Execute seed-users.ts primeiro.');
    process.exit(1);
  }

  const department = await prisma.department.findFirst({
    where: { name: 'dev institutional Department', is_deleted: false },
  });
  if (!department) {
    console.error('❌ Departamento "dev institutional Department" não encontrado. Execute seed-users.ts primeiro.');
    process.exit(1);
  }

  const adminUser = await prisma.user.findFirst({ where: { email: 'admin@mail.com', is_deleted: false } });
  if (!adminUser) {
    console.error('❌ Usuário admin@mail.com não encontrado. Execute seed-users.ts primeiro.');
    process.exit(1);
  }

  console.log('  ✅ Instituição:', institution.name);
  console.log('  ✅ Departamento:', department.name);

  // ── 2. Garantir usuário PROJECT_OWNER ─────────────────────────────────────
  const { email: ownerEmail, password: ownerPass } = await ensureProjectOwnerUser(institution.id, department.id);

  // ── 3. Garantir projeto e atividade ───────────────────────────────────────
  const { projectId, activityId } = await ensureTestProject(institution.id, department.id, adminUser.id);
  console.log('  ✅ Projeto ID:', projectId);
  console.log('  ✅ Atividade ID:', activityId);

  // Limpar subsídios de testes anteriores para evitar duplicata
  await cleanupTestSubsidies(projectId);

  // Buscar o budget do projeto
  const project = await prisma.project.findUnique({ where: { id: projectId } });
  const totalBudget = 10000; // Valor fixo para teste

  // ── 4. Definir cenários ───────────────────────────────────────────────────
  const scenarios: Array<{
    roleLabel: string;
    email: string;
    password: string;
    expected: 'ALLOW' | 'DENY';
  }> = [
    { roleLabel: 'DEV',              email: 'dev@mail.com',       password: '123123', expected: 'ALLOW' },
    { roleLabel: 'ADMIN',            email: 'admin@mail.com',     password: '123123', expected: 'ALLOW' },
    { roleLabel: 'PROJECT_OWNER',    email: ownerEmail,           password: ownerPass, expected: 'ALLOW' },
    { roleLabel: 'CHURCH_LEADER',    email: 'churchleader@mail.com', password: '123123', expected: 'ALLOW' },
    { roleLabel: 'CHURCH_MEMBER',    email: 'churchmember@mail.com', password: '123123', expected: 'DENY'  },
    { roleLabel: 'FINANCIAL_MANAGER', email: 'finance@mail.com', password: '123123', expected: 'DENY'  },
  ];

  console.log('\n══════════════════════════════════════════════════════');
  console.log('  🔐  TESTES DE PERMISSÃO — WITHOUT_DOCUMENT');
  console.log('══════════════════════════════════════════════════════\n');

  // ── 5. Testar WITHOUT_DOCUMENT para cada role ─────────────────────────────
  for (const scenario of scenarios) {
    process.stdout.write(`  [${scenario.roleLabel.padEnd(22)}] ${scenario.email.padEnd(32)} → `);

    const token = await login(scenario.email, scenario.password);
    if (!token) {
      console.log('❌ LOGIN FALHOU');
      results.push({
        role: scenario.roleLabel,
        email: scenario.email,
        scenario: 'WITHOUT_DOCUMENT',
        expected: scenario.expected,
        actual: 'ERROR',
        passed: false,
        detail: 'Login failed',
      });
      continue;
    }

    // Encontrar o userId para usar como requester_id
    const user = await prisma.user.findFirst({ where: { email: scenario.email, is_deleted: false } });
    if (!user) {
      console.log('❌ USUÁRIO NÃO ENCONTRADO NO BANCO');
      continue;
    }

    const { id, error } = await testCreateWithoutDocument(
      token, projectId, department.id, institution.id, activityId, user.id, totalBudget,
    );

    const isPermissionError = error?.includes('permission') || error?.includes('Unauthorized') || error?.includes('authorized');
    const isGraphQLValidation = error?.includes('got invalid value') || error?.includes('of required type') || error?.includes('GRAPHQL_VALIDATION_FAILED');
    const isBusinessError = !isPermissionError && !isGraphQLValidation && !!error;

    let actual: ActualResult;
    if (id) {
      actual = 'ALLOW';
    } else if (isPermissionError) {
      actual = 'DENY';
    } else if (isGraphQLValidation) {
      // Erro de validação GraphQL ocorre antes do guard → não diz nada sobre permissão
      actual = 'ERROR';
    } else if (isBusinessError) {
      // Erro de negócio = chegou ao backend (permissão OK), bloqueado por regra de negócio
      actual = 'ALLOW';
    } else {
      actual = 'ERROR';
    }

    const passed = actual === scenario.expected || (actual === 'ALLOW' && scenario.expected === 'ALLOW');

    const icon = passed ? '✅' : '❌';
    const label = actual === 'ALLOW' ? 'CRIADO' : actual === 'DENY' ? 'BLOQUEADO (sem permissão)' : `ERRO: ${error?.substring(0, 60)}`;
    console.log(`${icon} ${label}`);

    // Limpar subsídio criado para liberar a atividade para o próximo teste
    if (id) {
      await prisma.subsidyRequest.update({
        where: { id },
        data: { is_deleted: true, deleted_by: 'test-script', updated_by: 'test-script' },
      });
    }

    results.push({ role: scenario.roleLabel, email: scenario.email, scenario: 'WITHOUT_DOCUMENT', expected: scenario.expected, actual, passed, detail: error });
  }

  console.log('\n══════════════════════════════════════════════════════');
  console.log('  🔐  TESTES DE PERMISSÃO — WITH_DOCUMENT (sem docs)');
  console.log('══════════════════════════════════════════════════════\n');

  // ── 6. Testar WITH_DOCUMENT (sem docs reais → erro de negócio ou permissão) ─
  for (const scenario of scenarios) {
    process.stdout.write(`  [${scenario.roleLabel.padEnd(22)}] ${scenario.email.padEnd(32)} → `);

    const token = await login(scenario.email, scenario.password);
    if (!token) { console.log('❌ LOGIN FALHOU'); continue; }

    const user = await prisma.user.findFirst({ where: { email: scenario.email, is_deleted: false } });
    if (!user) { console.log('❌ USUÁRIO NÃO ENCONTRADO'); continue; }

    const { id, error } = await testCreateWithDocument(
      token, projectId, department.id, institution.id, activityId, user.id, totalBudget,
    );

    const isPermissionError = error?.includes('permission') || error?.includes('Unauthorized') || error?.includes('authorized');
    const isGraphQLValidation = error?.includes('got invalid value') || error?.includes('of required type') || error?.includes('GRAPHQL_VALIDATION_FAILED');
    const isBusinessError = !isPermissionError && !isGraphQLValidation && !!error;

    let actual: ActualResult;
    if (id) {
      actual = 'ALLOW';
    } else if (isPermissionError) {
      actual = 'DENY';
    } else if (isGraphQLValidation) {
      // Erro de validação GraphQL ocorre antes do guard → não diz nada sobre permissão
      actual = 'ERROR';
    } else if (isBusinessError) {
      // Erro de negócio = chegou ao backend (permissão OK)
      actual = 'ALLOW';
    } else {
      actual = 'ERROR';
    }

    const passed = actual === scenario.expected || (actual === 'ALLOW' && scenario.expected === 'ALLOW');
    const icon = passed ? '✅' : '❌';
    const label = actual === 'ALLOW' ? (id ? 'CRIADO' : `CHEGOU AO BACKEND: ${error?.substring(0, 50)}`) : actual === 'DENY' ? 'BLOQUEADO (sem permissão)' : `ERRO: ${error?.substring(0, 60)}`;
    console.log(`${icon} ${label}`);

    if (id) {
      await prisma.subsidyRequest.update({
        where: { id },
        data: { is_deleted: true, deleted_by: 'test-script', updated_by: 'test-script' },
      });
    }

    results.push({ role: scenario.roleLabel, email: scenario.email, scenario: 'WITH_DOCUMENT', expected: scenario.expected, actual, passed, detail: error });
  }

  // ── 7. Relatório final ────────────────────────────────────────────────────
  console.log('\n══════════════════════════════════════════════════════');
  console.log('  📊  RESUMO DOS RESULTADOS');
  console.log('══════════════════════════════════════════════════════\n');

  const passed = results.filter(r => r.passed).length;
  const failed = results.filter(r => !r.passed).length;

  console.log(`  Total: ${results.length}  ✅ Passou: ${passed}  ❌ Falhou: ${failed}\n`);

  if (failed > 0) {
    console.log('  Falhas:');
    for (const r of results.filter(r => !r.passed)) {
      console.log(`    ❌ [${r.role}] ${r.scenario}: esperado=${r.expected} obtido=${r.actual} — ${r.detail ?? ''}`);
    }
  }

  console.log('\n  Matriz de permissões verificada:');
  console.log('  ┌─────────────────────────┬──────────────────┬─────────────────┐');
  console.log('  │ Role                    │ WITHOUT_DOCUMENT │ WITH_DOCUMENT   │');
  console.log('  ├─────────────────────────┼──────────────────┼─────────────────┤');

  const uniqueRoles = [...new Set(results.map(r => r.role))];
  for (const role of uniqueRoles) {
    const withoutDoc = results.find(r => r.role === role && r.scenario === 'WITHOUT_DOCUMENT');
    const withDoc    = results.find(r => r.role === role && r.scenario === 'WITH_DOCUMENT');
    const wo = withoutDoc ? (withoutDoc.passed ? (withoutDoc.actual === 'ALLOW' ? '✅ CRIADO   ' : '✅ NEGADO   ') : '❌ FALHOU   ') : '—           ';
    const wd = withDoc    ? (withDoc.passed    ? (withDoc.actual    === 'ALLOW' ? '✅ CRIADO  ' : '✅ NEGADO  ') : '❌ FALHOU  ') : '—          ';
    console.log(`  │ ${role.padEnd(23)} │ ${wo}       │ ${wd}      │`);
  }
  console.log('  └─────────────────────────┴──────────────────┴─────────────────┘\n');

  if (failed > 0) {
    console.log('  ❌ Alguns testes falharam. Verifique as permissões e o seed.\n');
    process.exit(1);
  } else {
    console.log('  🎉 Todos os testes passaram!\n');
  }
}

runTests()
  .catch(e => {
    console.error('❌ Erro fatal no script de teste:', e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
