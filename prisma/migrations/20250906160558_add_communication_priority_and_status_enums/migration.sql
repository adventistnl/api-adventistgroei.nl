-- CreateEnum
CREATE TYPE "public"."CommunicationPriority" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL');

-- CreateEnum
CREATE TYPE "public"."CommunicationStatus" AS ENUM ('DRAFT', 'SCHEDULED', 'SENT', 'FAILED');
