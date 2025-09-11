-- CreateTable
CREATE TABLE "public"."VoluntariesOnProjects" (
    "user_id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,

    CONSTRAINT "VoluntariesOnProjects_pkey" PRIMARY KEY ("user_id","project_id")
);

-- AddForeignKey
ALTER TABLE "public"."VoluntariesOnProjects" ADD CONSTRAINT "VoluntariesOnProjects_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."VoluntariesOnProjects" ADD CONSTRAINT "VoluntariesOnProjects_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "public"."Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
