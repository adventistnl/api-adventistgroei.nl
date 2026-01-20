-- AlterEnum
-- Adding new institution and department budget mutation resolver names

ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'createInstitutionBudget';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'updateInstitutionBudget';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'createDepartmentBudget';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'updateDepartmentBudget';
