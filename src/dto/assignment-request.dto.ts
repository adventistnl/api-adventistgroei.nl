import { InputType, Field, ObjectType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateAssignmentInviteTemplateInput {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString()
  subject: string;

  /** Mustache placeholders: {{churchName}}, {{date}}, {{preacherName}}, {{inviterName}}. */
  @Field()
  @IsString()
  body: string;
}

@InputType()
export class UpdateAssignmentInviteTemplateInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  name?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  subject?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  body?: string;
}

/** R6 reach (§7.2) — a preacher's eligible regions = their home church's region ∪ every
 * region with a row here. Granting a row for every institution region is how "national" reach
 * is expressed — there is no separate scope_level flag. */
@InputType()
export class GrantPreacherRegionAccessInput {
  @Field()
  @IsString()
  user_id: string;

  @Field()
  @IsString()
  region_id: string;
}

@ObjectType()
export class OpenSlotForPreacher {
  @Field()
  churchId!: string;

  @Field()
  churchName!: string;

  @Field(() => Date)
  date!: Date;
}
