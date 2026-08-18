import { InputType, Field, Int } from '@nestjs/graphql';
import { IsBoolean, IsDate, IsInt, IsOptional, IsString, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
export class SetServiceCalendarInput {
  @Field()
  @IsString()
  church_id: string;

  @Field(() => Boolean)
  @IsBoolean()
  has_service: boolean;

  /** Set exactly one of `date` (a single point exception) or `day_of_week` (a weekly default). */
  @Field(() => Date, { nullable: true })
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  date?: Date;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(6)
  day_of_week?: number;

  /** Required when day_of_week is set. */
  @Field(() => Date, { nullable: true })
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  effective_from?: Date;

  /** Optional bound when day_of_week is set — defaults to 12 months from effective_from. */
  @Field(() => Date, { nullable: true })
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  effective_until?: Date;
}

@InputType()
export class SetServiceCalendarBulkInput {
  @Field(() => [String])
  @IsString({ each: true })
  church_ids: string[];

  @Field(() => Int)
  @IsInt()
  @Min(0)
  @Max(6)
  day_of_week: number;

  @Field(() => Boolean)
  @IsBoolean()
  has_service: boolean;

  @Field(() => Date)
  @Type(() => Date)
  @IsDate()
  effective_from: Date;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  effective_until?: Date;
}
