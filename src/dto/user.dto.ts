import { InputType, Field } from '@nestjs/graphql';
import { ContactCreateDto, ContactUpdateDto } from './contact.dto';
import { IsOptional, IsString  } from 'class-validator';
import { GenderType } from 'src/@generated/prisma/gender-type.enum';

@InputType()
export class UserCreateDto {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString()
  email: string;
  
  @Field()
  @IsString()
  password: string;
  
  @Field(() => String)
  language_preference: string;

  @Field()
  @IsString()
  institution_id: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  church_id?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  church_department_id?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  institution_department_id?: string;

  @Field(() => ContactCreateDto, { nullable: true })
  contact?: ContactCreateDto;

  @Field(() => [String])
  roles: string[];

  @Field(() => GenderType)
  gender: GenderType;

  @Field(() => String)
  invite_token: string;
}

@InputType()
export class UserUpdateDto {
  @Field({ nullable: true })
  @IsString()
  name?: string;

  @Field({ nullable: true })
  @IsString()
  email?: string;
  
  @Field(() => String, { nullable: true })
  language_preference?: string;

  @Field({ nullable: true })
  @IsString()
  institution_id?: string;

  @Field({ nullable: true })
  @IsString()
  church_id?: string;

  @Field({ nullable: true })
  @IsString()
  department_id?: string;

  @Field({ nullable: true })
  contact_id?: string;

  @Field(() => Boolean, { nullable: true })
  is_deleted?: boolean;

  @Field(() => Boolean, { nullable: true })
  recieve_emails?: boolean;

  @Field(() => ContactUpdateDto, { nullable: true })
  contact?: ContactUpdateDto;

  @Field(() => GenderType, { nullable: true })
  gender?: GenderType;

  @Field(() => String, { nullable: true })
  phone?: string;

  @Field(() => String, { nullable: true })
  address?: string;
}
