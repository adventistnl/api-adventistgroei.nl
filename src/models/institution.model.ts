import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { LanguagePreference } from 'src/@generated/prisma/language-preference.enum';

registerEnumType(LanguagePreference, {
  name: 'LanguagePreference',
  description: 'Idioma preferencial da instituição',
});

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

@ObjectType()
export class UsersByRoleData {
  @Field()
  role: string;

  @Field()
  count: number;

  @Field()
  fill: string;
}

@ObjectType()
export class ChurchesByRegionData {
  @Field()
  region: string;

  @Field()
  name: string;

  @Field()
  churches: number;

  @Field({ nullable: true })
  color?: string;

  @Field()
  fill: string;
}

@ObjectType()
export class InstitutionChartsData {
  @Field(() => [UsersByRoleData])
  usersByRole: UsersByRoleData[];

  @Field({ nullable: true })
  monthlyUserGrowth?: number;

  @Field(() => [ChurchesByRegionData])
  churchesByRegion: ChurchesByRegionData[];
}
