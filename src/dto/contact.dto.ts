import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

export enum TargetEnum {
  INSTITUTION = 'institution',
  USER = 'user',
  CHURCH = 'church',
  DEPARTMENT = 'department',
  EVENT = 'event',
}

@InputType()
export class ContactCreateDto {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  mobile?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  country?: string;

  @Field({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  full_address?: string;

  @Field({ nullable: true })
  postal_code?: string;

  @Field({ nullable: true })
  website?: string;

  @Field({ nullable: true })
  notes?: string;
}

@InputType()
export class ContactUpdateDto extends PartialType(ContactCreateDto) {
  @Field()
  id: string;

  @Field(() => Boolean, { nullable: true })
  is_primary?: boolean;
}

@InputType()
export class LinkContactDto {
  @Field()
  @IsNotEmpty()
  @IsString()
  contact_id: string; // ID do contato a ser vinculado

  @Field()
  @IsNotEmpty()
  @IsString()
  target: TargetEnum; // Nome da tabela de destino (ex.: 'institution', 'user')

  @Field()
  @IsNotEmpty()
  @IsString()
  target_id: string; // ID do registro na tabela de destino
}