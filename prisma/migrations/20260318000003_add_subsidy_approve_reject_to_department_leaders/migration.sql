-- Add SUBSIDY_REQUEST_APPROVE, SUBSIDY_REQUEST_REJECT and SUBSIDY_STATUSES_ACCESS
-- to INSTITUTIONAL_DEPARTMENT_LEADER and DEPARTMENT_CHURCH_LEADER roles.
-- These permissions allow department leaders to move a subsidy request
-- through its full status lifecycle (approve, reject, etc.).

-- Helper: insert a permission for a role only if not already present
-- Pattern: INSERT ... SELECT ... WHERE NOT EXISTS (...)

-- 1. SUBSIDY_REQUEST_APPROVE → INSTITUTIONAL_DEPARTMENT_LEADER
INSERT INTO "public"."RolePermission" ("id", "role_id", "permission_id", "is_essential", "created_at", "updated_at", "created_by", "updated_by")
SELECT concat(r.id, '_', p.id), r.id, p.id, true, now(), now(), 'migration', 'migration'
FROM "public"."Role" r
JOIN "public"."Permission" p ON p.key_code = 'SUBSIDY_REQUEST_APPROVE'
WHERE r.key_code = 'INSTITUTIONAL_DEPARTMENT_LEADER'
  AND NOT EXISTS (SELECT 1 FROM "public"."RolePermission" rp WHERE rp.role_id = r.id AND rp.permission_id = p.id);

-- 2. SUBSIDY_REQUEST_REJECT → INSTITUTIONAL_DEPARTMENT_LEADER
INSERT INTO "public"."RolePermission" ("id", "role_id", "permission_id", "is_essential", "created_at", "updated_at", "created_by", "updated_by")
SELECT concat(r.id, '_', p.id), r.id, p.id, true, now(), now(), 'migration', 'migration'
FROM "public"."Role" r
JOIN "public"."Permission" p ON p.key_code = 'SUBSIDY_REQUEST_REJECT'
WHERE r.key_code = 'INSTITUTIONAL_DEPARTMENT_LEADER'
  AND NOT EXISTS (SELECT 1 FROM "public"."RolePermission" rp WHERE rp.role_id = r.id AND rp.permission_id = p.id);

-- 3. SUBSIDY_STATUSES_ACCESS → INSTITUTIONAL_DEPARTMENT_LEADER
INSERT INTO "public"."RolePermission" ("id", "role_id", "permission_id", "is_essential", "created_at", "updated_at", "created_by", "updated_by")
SELECT concat(r.id, '_', p.id), r.id, p.id, true, now(), now(), 'migration', 'migration'
FROM "public"."Role" r
JOIN "public"."Permission" p ON p.key_code = 'SUBSIDY_STATUSES_ACCESS'
WHERE r.key_code = 'INSTITUTIONAL_DEPARTMENT_LEADER'
  AND NOT EXISTS (SELECT 1 FROM "public"."RolePermission" rp WHERE rp.role_id = r.id AND rp.permission_id = p.id);

-- 4. SUBSIDY_REQUEST_APPROVE → DEPARTMENT_CHURCH_LEADER
INSERT INTO "public"."RolePermission" ("id", "role_id", "permission_id", "is_essential", "created_at", "updated_at", "created_by", "updated_by")
SELECT concat(r.id, '_', p.id), r.id, p.id, true, now(), now(), 'migration', 'migration'
FROM "public"."Role" r
JOIN "public"."Permission" p ON p.key_code = 'SUBSIDY_REQUEST_APPROVE'
WHERE r.key_code = 'DEPARTMENT_CHURCH_LEADER'
  AND NOT EXISTS (SELECT 1 FROM "public"."RolePermission" rp WHERE rp.role_id = r.id AND rp.permission_id = p.id);

-- 5. SUBSIDY_REQUEST_REJECT → DEPARTMENT_CHURCH_LEADER
INSERT INTO "public"."RolePermission" ("id", "role_id", "permission_id", "is_essential", "created_at", "updated_at", "created_by", "updated_by")
SELECT concat(r.id, '_', p.id), r.id, p.id, true, now(), now(), 'migration', 'migration'
FROM "public"."Role" r
JOIN "public"."Permission" p ON p.key_code = 'SUBSIDY_REQUEST_REJECT'
WHERE r.key_code = 'DEPARTMENT_CHURCH_LEADER'
  AND NOT EXISTS (SELECT 1 FROM "public"."RolePermission" rp WHERE rp.role_id = r.id AND rp.permission_id = p.id);

-- 6. SUBSIDY_STATUSES_ACCESS → DEPARTMENT_CHURCH_LEADER
INSERT INTO "public"."RolePermission" ("id", "role_id", "permission_id", "is_essential", "created_at", "updated_at", "created_by", "updated_by")
SELECT concat(r.id, '_', p.id), r.id, p.id, true, now(), now(), 'migration', 'migration'
FROM "public"."Role" r
JOIN "public"."Permission" p ON p.key_code = 'SUBSIDY_STATUSES_ACCESS'
WHERE r.key_code = 'DEPARTMENT_CHURCH_LEADER'
  AND NOT EXISTS (SELECT 1 FROM "public"."RolePermission" rp WHERE rp.role_id = r.id AND rp.permission_id = p.id);
