-- CreateTable
CREATE TABLE "public"."UsedTokens" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "usedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tokenExpiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UsedTokens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UsedTokens_token_key" ON "public"."UsedTokens"("token");
