-- Add missing document validation permissions to roles
--
-- 1. FINANCIAL_MANAGER  → add VALIDATE_ACTIVITY_DOCUMENT
-- 2. INSTITUTIONAL_DEPARTMENT_LEADER → add VALIDATE_SUBSIDY_RECEIPT
-- 3. DEPARTMENT_CHURCH_LEADER → add VALIDATE_SUBSIDY_RECEIPT

-- 1. VALIDATE_ACTIVITY_DOCUMENT → FINANCIAL_MANAGER
INSERT INTO "public"."RolePermission" ("id", "role_id", "permission_id", "is_essential", "created_at", "updated_at", "created_by", "updated_by")
SELECT
  concat(r.id, '_', p.id),
  r.id,
  p.id,
  true,
  now(),
  now(),
  'migration',
  'migration'
FROM "public"."Role" r
JOIN "public"."Permission" p ON p.key_code = 'VALIDATE_ACTIVITY_DOCUMENT'
WHERE r.key_code = 'FINANCIAL_MANAGER'
  AND NOT EXISTS (
    SELECT 1 FROM "public"."RolePermission" rp
    WHERE rp.role_id = r.id AND rp.permission_id = p.id
  );

-- 2. VALIDATE_SUBSIDY_RECEIPT → INSTITUTIONAL_DEPARTMENT_LEADER
INSERT INTO "public"."RolePermission" ("id", "role_id", "permission_id", "is_essential", "created_at", "updated_at", "created_by", "updated_by")
SELECT
  concat(r.id, '_', p.id),
  r.id,
  p.id,
  true,
  now(),
  now(),
  'migration',
  'migration'
FROM "public"."Role" r
JOIN "public"."Permission" p ON p.key_code = 'VALIDATE_SUBSIDY_RECEIPT'
WHERE r.key_code = 'INSTITUTIONAL_DEPARTMENT_LEADER'
  AND NOT EXISTS (
    SELECT 1 FROM "public"."RolePermission" rp
    WHERE rp.role_id = r.id AND rp.permission_id = p.id
  );

-- 3. VALIDATE_SUBSIDY_RECEIPT → DEPARTMENT_CHURCH_LEADER
INSERT INTO "public"."RolePermission" ("id", "role_id", "permission_id", "is_essential", "created_at", "updated_at", "created_by", "updated_by")
SELECT
  concat(r.id, '_', p.id),
  r.id,
  p.id,
  true,
  now(),
  now(),
  'migration',
  'migration'
FROM "public"."Role" r
JOIN "public"."Permission" p ON p.key_code = 'VALIDATE_SUBSIDY_RECEIPT'
WHERE r.key_code = 'DEPARTMENT_CHURCH_LEADER'
  AND NOT EXISTS (
    SELECT 1 FROM "public"."RolePermission" rp
    WHERE rp.role_id = r.id AND rp.permission_id = p.id
  );
