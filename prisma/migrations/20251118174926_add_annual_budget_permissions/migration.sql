-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'annualBudgets';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'annualBudget';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'updateAnnualBudget';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'deleteAnnualBudget';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'approveAnnualBudget';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'rejectAnnualBudget';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'requestRevisionAnnualBudget';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'toggleBudgetLock';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'budgetKPIs';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'departmentSpending';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'spendingOverTime';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'entityDistribution';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'budgetDistribution';
