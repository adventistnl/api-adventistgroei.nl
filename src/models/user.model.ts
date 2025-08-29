import { ObjectType, Field } from '@nestjs/graphql';
import { LanguagePreference } from '@prisma/client';

@ObjectType()
export class UserModel {
  @Field()
  id: string;

  @Field()
  institution_id: string;

  @Field()
  church_id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field(() => LanguagePreference)
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
