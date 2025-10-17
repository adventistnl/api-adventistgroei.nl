import { ObjectType, Field } from '@nestjs/graphql';
import { LanguagePreference } from 'src/@generated/prisma/language-preference.enum';

@ObjectType()
export class InviteModel {
  @Field()
  token: string;

  @Field()
  url: string;
}


@ObjectType()
export class ValidateOutputModel {
  @Field(() => [String])
  role_ids: string[];

  @Field(() => String)
  email: string;

  @Field(() => String)
  institution_id: string;

  @Field(() => String)
  inviter_id: string;

  @Field(() => LanguagePreference, { nullable: true })
  language_preference?: LanguagePreference;

  @Field(() => Number)
  exp: number

}