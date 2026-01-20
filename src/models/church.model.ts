import { ObjectType, Field } from '@nestjs/graphql';
import { ChurchType } from '../../src/@generated/prisma/church-type.enum';

@ObjectType()
export class ChurchKPIData {
  @Field()
  totalChurches: number;

  @Field()
  totalMembers: number;

  @Field()
  totalDepartments: number;

  @Field()
  totalSubsidyRequests: number;

  @Field()
  totalBudget: number;

  @Field()
  totalUsedBudget: number;

  @Field()
  budgetUtilization: number;

  @Field()
  avgMembersPerChurch: number;
}

@ObjectType()
export class ChurchActivityData {
  @Field()
  church_id: string;

  @Field()
  church_name: string;

  @Field()
  month: string;

  @Field()
  year: number;

  @Field()
  activity_score: number;

  @Field()
  user_count: number;

  @Field()
  department_count: number;

  @Field()
  project_count: number;

  @Field()
  has_recent_activity: boolean;

  @Field()
  has_recent_departments: boolean;

  @Field()
  has_recent_projects: boolean;

  @Field()
  has_updated_church: boolean;

  @Field()
  has_new_users: boolean;
}

@ObjectType()
export class ChurchChartData {
  @Field()
  church: string;

  @Field()
  fullName: string;

  @Field()
  members: number;

  @Field()
  activeMembers: number;

  @Field()
  projects: number;

  @Field()
  activeProjects: number;

  @Field()
  fill: string;
}

@ObjectType()
export class ChurchModel {
  @Field()
  id: string;

  @Field()
  institution_id: string;

  @Field()
  name: string;

  @Field(() => String, { nullable: true })
  region_id?: string | null;

  @Field(() => ChurchType, { nullable: true })
  type?: ChurchType | null;

  @Field(() => String, { nullable: true })
  contact_id?: string | null;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;

  @Field()
  created_by: string;

  @Field()
  updated_by: string;

  @Field()
  is_deleted: boolean;

  @Field({ nullable: true })
  deleted_at?: Date;

  @Field(() => String, { nullable: true })
  deleted_by?: string;
}
