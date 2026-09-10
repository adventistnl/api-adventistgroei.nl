import { InputType, Field } from '@nestjs/graphql';
import { IsDate, IsEnum, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { AssignmentStatus } from 'src/@generated/prisma/assignment-status.enum';

@InputType()
export class SetAssignmentInput {
  @Field()
  @IsString()
  church_id: string;

  @Field(() => Date)
  @Type(() => Date)
  @IsDate()
  date: Date;

  /** Omit or pass null to clear the assignment back to an open slot. */
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  user_id?: string;

  /** Defaults to CONFIRMED when user_id is set, DRAFT otherwise. */
  @Field(() => AssignmentStatus, { nullable: true })
  @IsOptional()
  @IsEnum(AssignmentStatus)
  status?: AssignmentStatus;
}
