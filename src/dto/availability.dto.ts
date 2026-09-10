import { InputType, Field } from '@nestjs/graphql';
import { IsDate, IsEnum, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { AvailabilityStatus } from 'src/@generated/prisma/availability-status.enum';

@InputType()
export class SetAvailabilityInput {
  @Field(() => Date)
  @Type(() => Date)
  @IsDate()
  date: Date;

  @Field(() => AvailabilityStatus)
  @IsEnum(AvailabilityStatus)
  status: AvailabilityStatus;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  note?: string;
}

@InputType()
export class SetAvailabilityBulkInput {
  @Field(() => Date)
  @Type(() => Date)
  @IsDate()
  start_date: Date;

  @Field(() => Date)
  @Type(() => Date)
  @IsDate()
  end_date: Date;

  @Field(() => AvailabilityStatus)
  @IsEnum(AvailabilityStatus)
  status: AvailabilityStatus;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  note?: string;
}
