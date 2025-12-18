import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsString, IsNumber, IsDateString, IsEnum, IsBoolean, IsArray } from 'class-validator';
import { ActivityTags } from 'src/@generated/prisma/activity-tags.enum';
import { EntityType } from 'src/@generated/prisma/entity-type.enum';
import { ActivityStatus } from 'src/@generated/prisma/activity-status.enum';
import { ActivityPriority } from 'src/@generated/prisma/activity-priority.enum';


@InputType()
export class ActivityFundingCreateDto {
  @Field()
  @IsNumber()
  entity_contribution_amount: number;

  @Field()
  @IsNumber()
  entity_contribution_percent: number;

  @Field(() => EntityType)
  @IsEnum(EntityType)
  entity_type: EntityType;

  @Field()
  @IsString()
  entity_id: string;
}

@InputType()
export class ProjectActivityCreateDto {
  @Field()
  @IsString()
  project_id: string;

  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString()
  description: string;

  @Field()
  @IsNumber()
  budget_amount: number;

  @Field()
  @IsDateString()
  deadline: string;

  @Field()
  @IsString()
  owner_id: string;

  @Field(() => [ActivityTags])
  tags: ActivityTags[];

  @Field({ nullable: true })
  @IsOptional()
  @IsBoolean()
  is_subsidized?: boolean;

  @Field(() => ActivityFundingCreateDto)
  activity_funding: ActivityFundingCreateDto;
}

@InputType()
export class ActivityFundingUpdateDto {
  @Field({ nullable: true })
  @IsOptional()
  @IsNumber()
  entity_contribution_amount?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsNumber()
  entity_contribution_percent?: number;

  @Field(() => EntityType, { nullable: true })
  @IsOptional()
  @IsEnum(EntityType)
  entity_type?: EntityType;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  entity_id?: string;
}

@InputType()
export class ProjectActivityUpdateDto {
  @Field()
  @IsString()
  id: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  name?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsNumber()
  budget_amount?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsDateString()
  deadline?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  owner_id?: string;

  @Field(() => [ActivityTags], { nullable: true })
  @IsOptional()
  tags?: ActivityTags[];

  @Field(() => ActivityFundingUpdateDto, { nullable: true })
  @IsOptional()
  activity_funding?: ActivityFundingUpdateDto;
}

@InputType()
export class ProjectActivityBatchUpdateDto {
  @Field(() => [String])
  @IsArray()
  ids: string[];

  @Field(() => ActivityStatus, { nullable: true })
  @IsOptional()
  @IsEnum(ActivityStatus)
  status?: ActivityStatus;

  @Field(() => ActivityPriority, { nullable: true })
  @IsOptional()
  @IsEnum(ActivityPriority)
  priority?: ActivityPriority;

  @Field(() => ActivityTags, { nullable: true })
  @IsOptional()
  @IsEnum(ActivityTags)
  activity_tag?: ActivityTags;

  @Field({ nullable: true })
  @IsOptional()
  @IsBoolean()
  is_subsidized?: boolean;
}
