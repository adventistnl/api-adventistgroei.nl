import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class RegionModel {
  @Field()
  id: string;

  @Field()
  institution_id: string;

  @Field()
  name: string;

  @Field(() => String, { nullable: true })
  parent_region_id?: string | null;

  @Field(() => String, { nullable: true })
  contact_id?: string | null;

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

  @Field(() => String, { nullable: true })
  deleted_by?: string;
}
