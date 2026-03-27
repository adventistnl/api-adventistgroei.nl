-- Migration: add DRAFT SubsidyStatus, submitSubsidyRequest permission resolver,
-- SUBSIDY_REQUEST_SUBMIT Permission row, and assign it to the 6 roles that can
-- create subsidy requests.

-- 1. Add submitSubsidyRequest to PermissionResolverName enum
ALTER TYPE "public"."PermissionResolverName" ADD VALUE IF NOT EXISTS 'submitSubsidyRequest';

-- 2. Insert the DRAFT SubsidyStatus (order 0, before PENDING)
INSERT INTO "public"."SubsidyStatus" ("id", "name", "description", "order", "created_at", "updated_at", "created_by", "updated_by", "is_deleted")
SELECT
  gen_random_uuid(),
  'DRAFT',
  'Rascunho — ainda não submetido',
  0,
  now(),
  now(),
  'migration',
  'migration',
  false
WHERE NOT EXISTS (SELECT 1 FROM "public"."SubsidyStatus" WHERE name = 'DRAFT');

-- 3. Insert SUBSIDY_REQUEST_SUBMIT Permission (if not yet seeded)
INSERT INTO "public"."Permission" ("id", "name", "description", "resolver_name", "group", "key_code", "disabled_to_client", "created_at", "updated_at", "created_by", "updated_by", "is_deleted")
SELECT
  gen_random_uuid(),
  'submit subsidy request',
  'Submit a draft subsidy request for review',
  'submitSubsidyRequest',
  'SUBSIDY_REQUEST',
  'SUBSIDY_REQUEST_SUBMIT',
  false,
  now(),
  now(),
  'migration',
  'migration',
  false
WHERE NOT EXISTS (SELECT 1 FROM "public"."Permission" WHERE key_code = 'SUBSIDY_REQUEST_SUBMIT');

-- 4. SUBSIDY_REQUEST_SUBMIT → ADMIN
INSERT INTO "public"."RolePermission" ("id", "role_id", "permission_id", "is_essential", "created_at", "updated_at", "created_by", "updated_by")
SELECT concat(r.id, '_', p.id), r.id, p.id, true, now(), now(), 'migration', 'migration'
FROM "public"."Role" r
JOIN "public"."Permission" p ON p.key_code = 'SUBSIDY_REQUEST_SUBMIT'
WHERE r.key_code = 'ADMIN'
  AND NOT EXISTS (SELECT 1 FROM "public"."RolePermission" rp WHERE rp.role_id = r.id AND rp.permission_id = p.id);

-- 5. SUBSIDY_REQUEST_SUBMIT → CHURCH_LEADER
INSERT INTO "public"."RolePermission" ("id", "role_id", "permission_id", "is_essential", "created_at", "updated_at", "created_by", "updated_by")
SELECT concat(r.id, '_', p.id), r.id, p.id, true, now(), now(), 'migration', 'migration'
FROM "public"."Role" r
JOIN "public"."Permission" p ON p.key_code = 'SUBSIDY_REQUEST_SUBMIT'
WHERE r.key_code = 'CHURCH_LEADER'
  AND NOT EXISTS (SELECT 1 FROM "public"."RolePermission" rp WHERE rp.role_id = r.id AND rp.permission_id = p.id);

-- 6. SUBSIDY_REQUEST_SUBMIT → INSTITUTIONAL_LEADER
INSERT INTO "public"."RolePermission" ("id", "role_id", "permission_id", "is_essential", "created_at", "updated_at", "created_by", "updated_by")
SELECT concat(r.id, '_', p.id), r.id, p.id, true, now(), now(), 'migration', 'migration'
FROM "public"."Role" r
JOIN "public"."Permission" p ON p.key_code = 'SUBSIDY_REQUEST_SUBMIT'
WHERE r.key_code = 'INSTITUTIONAL_LEADER'
  AND NOT EXISTS (SELECT 1 FROM "public"."RolePermission" rp WHERE rp.role_id = r.id AND rp.permission_id = p.id);

-- 7. SUBSIDY_REQUEST_SUBMIT → INSTITUTIONAL_DEPARTMENT_LEADER
INSERT INTO "public"."RolePermission" ("id", "role_id", "permission_id", "is_essential", "created_at", "updated_at", "created_by", "updated_by")
SELECT concat(r.id, '_', p.id), r.id, p.id, true, now(), now(), 'migration', 'migration'
FROM "public"."Role" r
JOIN "public"."Permission" p ON p.key_code = 'SUBSIDY_REQUEST_SUBMIT'
WHERE r.key_code = 'INSTITUTIONAL_DEPARTMENT_LEADER'
  AND NOT EXISTS (SELECT 1 FROM "public"."RolePermission" rp WHERE rp.role_id = r.id AND rp.permission_id = p.id);

-- 8. SUBSIDY_REQUEST_SUBMIT → DEPARTMENT_CHURCH_LEADER
INSERT INTO "public"."RolePermission" ("id", "role_id", "permission_id", "is_essential", "created_at", "updated_at", "created_by", "updated_by")
SELECT concat(r.id, '_', p.id), r.id, p.id, true, now(), now(), 'migration', 'migration'
FROM "public"."Role" r
JOIN "public"."Permission" p ON p.key_code = 'SUBSIDY_REQUEST_SUBMIT'
WHERE r.key_code = 'DEPARTMENT_CHURCH_LEADER'
  AND NOT EXISTS (SELECT 1 FROM "public"."RolePermission" rp WHERE rp.role_id = r.id AND rp.permission_id = p.id);

-- 9. SUBSIDY_REQUEST_SUBMIT → PROJECT_OWNER
INSERT INTO "public"."RolePermission" ("id", "role_id", "permission_id", "is_essential", "created_at", "updated_at", "created_by", "updated_by")
SELECT concat(r.id, '_', p.id), r.id, p.id, true, now(), now(), 'migration', 'migration'
FROM "public"."Role" r
JOIN "public"."Permission" p ON p.key_code = 'SUBSIDY_REQUEST_SUBMIT'
WHERE r.key_code = 'PROJECT_OWNER'
  AND NOT EXISTS (SELECT 1 FROM "public"."RolePermission" rp WHERE rp.role_id = r.id AND rp.permission_id = p.id);
