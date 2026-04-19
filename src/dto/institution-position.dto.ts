import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';
import { InstitutionPositionType } from 'src/@generated/prisma/institution-position-type.enum';

@InputType()
export class InstitutionPositionCreateDto {
  @Field()
  @IsString()
  institution_id: string;

  @Field(() => InstitutionPositionType)
  position_type: InstitutionPositionType;

  @Field()
  @IsString()
  user_id: string;
}

@InputType()
export class InstitutionPositionUpdateDto {
  @Field(() => InstitutionPositionType, { nullable: true })
  @IsOptional()
  position_type?: InstitutionPositionType;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  user_id?: string;
}
