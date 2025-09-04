/*
  Warnings:

  - A unique constraint covering the columns `[key_code]` on the table `Permission` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[key_code]` on the table `Role` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Permission_key_code_key" ON "public"."Permission"("key_code");

-- CreateIndex
CREATE UNIQUE INDEX "Role_key_code_key" ON "public"."Role"("key_code");
