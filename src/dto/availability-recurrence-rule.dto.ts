import { InputType, Field, Int } from '@nestjs/graphql';
import { IsDate, IsEnum, IsInt, IsOptional, IsString, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { AvailabilityStatus } from 'src/@generated/prisma/availability-status.enum';
import { RecurrenceType } from 'src/@generated/prisma/recurrence-type.enum';

@InputType()
export class SetAvailabilityRecurrenceRuleInput {
  /** When present, updates the caller's own existing rule instead of creating a new one. */
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  id?: string;

  @Field(() => RecurrenceType)
  @IsEnum(RecurrenceType)
  type: RecurrenceType;

  @Field(() => AvailabilityStatus)
  @IsEnum(AvailabilityStatus)
  status: AvailabilityStatus;

  /** Required when type = WEEKLY. 0 (Sunday)–6 (Saturday). */
  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(6)
  day_of_week?: number;

  /** Required when type = DATE_RANGE. */
  @Field(() => Date, { nullable: true })
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  start_date?: Date;

  /** Required when type = DATE_RANGE. */
  @Field(() => Date, { nullable: true })
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  end_date?: Date;

  /** When a WEEKLY rule starts applying. Ignored for DATE_RANGE (start_date is used instead). */
  @Field(() => Date, { nullable: true })
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  effective_from?: Date;

  /** Optional end date for a WEEKLY rule. */
  @Field(() => Date, { nullable: true })
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  effective_until?: Date;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  note?: string;
}
