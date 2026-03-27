-- Grant VALIDATE_SUBSIDY_RECEIPT permission to INSTITUTIONAL_LEADER role
-- This allows Institutional Leaders to validate/reject subsidy receipts
-- just like Financial Managers can.

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
WHERE r.key_code = 'INSTITUTIONAL_LEADER'
  AND NOT EXISTS (
    SELECT 1
    FROM "public"."RolePermission" rp
    WHERE rp.role_id = r.id
      AND rp.permission_id = p.id
  );
