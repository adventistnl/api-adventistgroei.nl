import { Field, Float, Int, InputType, ObjectType } from "@nestjs/graphql";
import { AnnualBudgetCategory } from "src/@generated/prisma/annual-budget-category.enum";
import { AnnualBudgetPriority } from "src/@generated/prisma/annual-budget-priority.enum";

// DTOs for additional mutations
@InputType()
export class DeleteAnnualBudgetDto {
  @Field(() => String, { nullable: false })
  reason?: string;
}

@InputType()
export class ApproveAnnualBudgetDto {
  @Field(() => Float, { nullable: true })
  approved_amount?: number;

  @Field(() => String, { nullable: true })
  notes?: string;
}

@InputType()
export class RejectAnnualBudgetDto {
  @Field(() => String, { nullable: false })
  reason!: string;
}

@InputType()
export class RequestRevisionAnnualBudgetDto {
  @Field(() => String, { nullable: false })
  revision_notes!: string;
}

// Response DTOs
@ObjectType()
export class DeleteBudgetResponse {
  @Field(() => Boolean)
  success!: boolean;

  @Field(() => String)
  message!: string;
}

@ObjectType()
export class ApproveBudgetResponse {
  @Field(() => String)
  id!: string;

  @Field(() => String)
  status!: string;

  @Field(() => Float, { nullable: true })
  approved_amount!: number | null;

  @Field(() => Date, { nullable: true })
  approval_date!: Date | null;

  @Field(() => String, { nullable: true })
  approved_by!: string | null;

  @Field(() => String, { nullable: true })
  notes!: string | null;

  @Field(() => Date)
  updated_at!: Date;
}

@ObjectType()
export class RejectBudgetResponse {
  @Field(() => String)
  id!: string;

  @Field(() => String)
  status!: string;

  @Field(() => Date)
  review_date!: Date;

  @Field(() => String)
  reviewed_by!: string;

  @Field(() => String, { nullable: true })
  notes!: string | null;

  @Field(() => Date)
  updated_at!: Date;
}

@ObjectType()
export class RequestRevisionBudgetResponse {
  @Field(() => String)
  id!: string;

  @Field(() => String)
  status!: string;

  @Field(() => Date)
  review_date!: Date;

  @Field(() => String)
  reviewed_by!: string;

  @Field(() => String, { nullable: true })
  notes!: string | null;

  @Field(() => Date)
  updated_at!: Date;
}

@ObjectType()
export class ToggleLockBudgetResponse {
  @Field(() => String)
  id!: string;

  @Field(() => Boolean)
  is_locked!: boolean;

  @Field(() => Date)
  updated_at!: Date;
}

@ObjectType()
export class RecalculateAllocatedAmountsResponse {
  @Field(() => Int)
  updated!: number;

  @Field(() => String)
  message!: string;
}

// ============================================
// INSTITUTION BUDGET SPECIFIC DTOs
// ============================================

@InputType()
export class InstitutionBudgetCreateDto {
  @Field(() => String, { nullable: false })
  institution_id!: string;

  @Field(() => Int, { nullable: false })
  year!: number;

  @Field(() => Float, { nullable: false })
  planned_budget!: number;

  @Field(() => Float, { nullable: true, defaultValue: 0 })
  total_expenses?: number;

  @Field(() => Float, { nullable: true, defaultValue: 0 })
  allocated_amount?: number;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  justification?: string;

  @Field(() => AnnualBudgetPriority, { nullable: true })
  priority?: `${AnnualBudgetPriority}`;

  @Field(() => AnnualBudgetCategory, { nullable: true })
  category?: `${AnnualBudgetCategory}`;

  @Field(() => String, { nullable: true })
  notes?: string;
}

@InputType()
export class InstitutionBudgetUpdateDto {
  @Field(() => Float, { nullable: true })
  planned_budget?: number;

  @Field(() => Float, { nullable: true })
  total_expenses?: number;

  @Field(() => Float, { nullable: true })
  allocated_amount?: number;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  justification?: string;

  @Field(() => AnnualBudgetPriority, { nullable: true })
  priority?: `${AnnualBudgetPriority}`;

  @Field(() => AnnualBudgetCategory, { nullable: true })
  category?: `${AnnualBudgetCategory}`;

  @Field(() => String, { nullable: true })
  notes?: string;

  @Field(() => [String], { nullable: true })
  documents?: string[];
}

// ============================================
// LEDGER HISTORY DTOs
// ============================================

@InputType()
export class LedgerHistoryFilterInput {
  @Field(() => String, { nullable: true })
  institutionId?: string;

  @Field(() => Int, { nullable: false })
  year!: number;

  @Field(() => String, { nullable: true })
  departmentId?: string;

  @Field(() => String, { nullable: true })
  churchId?: string;

  @Field(() => String, { nullable: true })
  regionId?: string;
}

@ObjectType()
export class LedgerHistoryEntry {
  @Field(() => String)
  id!: string;

  @Field(() => Date)
  date!: Date;

  @Field(() => String)
  description!: string;

  @Field(() => Float)
  amount!: number;

  @Field(() => String)
  type!: string; // e.g., "EXPENSE", "ALLOCATION", "TRANSFER_IN", "TRANSFER_OUT"

  @Field(() => String)
  category!: string; // "TRANSACTION" or "TRANSFER"

  @Field(() => String, { nullable: true })
  entityName?: string; // Name of Department, Church, etc.

  @Field(() => String, { nullable: true })
  relatedEntity?: string; // Project Name or Subsidy Request ID

  @Field(() => String, { nullable: true })
  createdBy?: string;

  @Field(() => Float, { nullable: true })
  balanceAfter?: number;
}

// ============================================
// DEPARTMENT BUDGET SPECIFIC DTOs
// ============================================

@InputType()
export class DepartmentBudgetCreateDto {
  @Field(() => String, { nullable: false })
  department_id!: string;

  @Field(() => Int, { nullable: false })
  year!: number;

  @Field(() => Float, { nullable: false })
  planned_budget!: number;

  @Field(() => Float, { nullable: true, defaultValue: 0 })
  total_expenses?: number;

  @Field(() => Float, { nullable: true, defaultValue: 0 })
  allocated_amount?: number;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  justification?: string;

  @Field(() => AnnualBudgetPriority, { nullable: true })
  priority?: `${AnnualBudgetPriority}`;

  @Field(() => AnnualBudgetCategory, { nullable: true })
  category?: `${AnnualBudgetCategory}`;

  @Field(() => String, { nullable: true })
  notes?: string;
}

@InputType()
export class DepartmentBudgetUpdateDto {
  @Field(() => Float, { nullable: true })
  planned_budget?: number;

  @Field(() => Float, { nullable: true })
  total_expenses?: number;

  @Field(() => Float, { nullable: true })
  allocated_amount?: number;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  justification?: string;

  @Field(() => AnnualBudgetPriority, { nullable: true })
  priority?: `${AnnualBudgetPriority}`;

  @Field(() => AnnualBudgetCategory, { nullable: true })
  category?: `${AnnualBudgetCategory}`;

  @Field(() => String, { nullable: true })
  notes?: string;

  @Field(() => [String], { nullable: true })
  documents?: string[];
}