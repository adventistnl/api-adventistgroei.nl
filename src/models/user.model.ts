import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { LanguagePreference } from 'src/@generated/prisma/language-preference.enum';
import { RoleModel } from './role.model';

registerEnumType(LanguagePreference, {
  name: 'LanguagePreference',
  description: 'Idioma preferencial do usuário',
});

@ObjectType()
export class UserModel {
  @Field()
  id: string;

  @Field()
  institution_id: string;

  @Field()
  password: string;

  @Field(() => String, { nullable: true })
  church_id: string | null;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  language_preference: LanguagePreference;

  @Field(() => String, { nullable: true })
  contact_id: string | null;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;

  @Field()
  created_by: string;

  @Field()
  updated_by: string;

  @Field()
  is_deleted: boolean;

  @Field(() => Date, { nullable: true })
  deleted_at: Date | null;

  @Field(() => String, { nullable: true })
  deleted_by: string | null;
}

@ObjectType()
export class UserWithRoles extends UserModel {
  @Field(() => [RoleModel])
  user_roles: RoleModel[];
}