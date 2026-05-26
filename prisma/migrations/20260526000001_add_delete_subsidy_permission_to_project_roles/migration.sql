-- Grant subsidy delete permission to project member roles that are already
-- allowed by service-level business rules to delete eligible subsidy requests.

-- PROJECT_OWNER -> SUBSIDY_REQUEST_DELETE
INSERT INTO "public"."RolePermission" ("id", "role_id", "permission_id", "is_essential", "created_at", "updated_at", "created_by", "updated_by")
SELECT concat(r.id, '_', p.id), r.id, p.id, true, now(), now(), 'migration', 'migration'
FROM "public"."Role" r
JOIN "public"."Permission" p ON p.key_code = 'SUBSIDY_REQUEST_DELETE'
WHERE r.key_code = 'PROJECT_OWNER'
  AND NOT EXISTS (
    SELECT 1
    FROM "public"."RolePermission" rp
    WHERE rp.role_id = r.id
      AND rp.permission_id = p.id
  );

-- PROJECT_CO_OWNER -> SUBSIDY_REQUEST_DELETE
INSERT INTO "public"."RolePermission" ("id", "role_id", "permission_id", "is_essential", "created_at", "updated_at", "created_by", "updated_by")
SELECT concat(r.id, '_', p.id), r.id, p.id, true, now(), now(), 'migration', 'migration'
FROM "public"."Role" r
JOIN "public"."Permission" p ON p.key_code = 'SUBSIDY_REQUEST_DELETE'
WHERE r.key_code = 'PROJECT_CO_OWNER'
  AND NOT EXISTS (
    SELECT 1
    FROM "public"."RolePermission" rp
    WHERE rp.role_id = r.id
      AND rp.permission_id = p.id
  );