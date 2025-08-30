import { ObjectType, Field } from '@nestjs/graphql';
import { LanguagePreference } from '@prisma/client';

@ObjectType()
export class InstitutionModel {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  denomination: string;

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

  @Field({ nullable: true })
  deleted_at?: Date;

  @Field({ nullable: true })
  deleted_by?: string;
}
