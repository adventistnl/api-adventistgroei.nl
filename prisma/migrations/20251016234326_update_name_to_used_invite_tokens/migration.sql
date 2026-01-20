/*
  Warnings:

  - You are about to drop the `UsedTokens` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."UsedTokens";

-- CreateTable
CREATE TABLE "public"."UsedInviteTokens" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "usedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tokenExpiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UsedInviteTokens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UsedInviteTokens_token_key" ON "public"."UsedInviteTokens"("token");
