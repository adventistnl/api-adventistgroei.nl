import { InputType, Field } from '@nestjs/graphql';
import { ContactCreateDto } from './contact.dto';
import { IsString  } from 'class-validator';

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

  @Field()
  @IsString()
  church_id: string;

  @Field()
  @IsString()
  department_id: string;

  @Field(() => ContactCreateDto, { nullable: true })
  contact?: ContactCreateDto;

  @Field(() => [String])
  roles: string[];
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

  @Field(() => ContactCreateDto, { nullable: true })
  contact?: ContactCreateDto;
}
