import { IsNotEmpty, IsString, IsOptional, IsArray } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class InviteUserDto {
  @Field(() => [String])
  @IsNotEmpty()
  @IsArray()
  role_ids: string[];

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  email: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  inviter_id: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  language_preference?: string;
  
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  message?: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  institution_id: string;
  
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  institution_department_id?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  church_id?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  church_department_id?: string;
}
