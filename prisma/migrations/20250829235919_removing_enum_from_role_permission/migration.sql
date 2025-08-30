/*
  Warnings:

  - Changed the type of `resolver_name` on the `Permission` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."Permission" DROP COLUMN "resolver_name",
ADD COLUMN     "resolver_name" TEXT NOT NULL;

-- DropEnum
DROP TYPE "public"."PermissionResolverName";

-- CreateIndex
CREATE UNIQUE INDEX "Permission_resolver_name_key" ON "public"."Permission"("resolver_name");
