-- AddForeignKey
ALTER TABLE "public"."BudgetTransaction" ADD CONSTRAINT "BudgetTransaction_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BudgetTransfer" ADD CONSTRAINT "BudgetTransfer_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
