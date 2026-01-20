import { ObjectType, Field } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { TerritoryMap } from 'src/dto/region.dto';

@ObjectType()
export class RegionKPIData {
  @Field()
  totalRegions: number;

  @Field()
  totalChurches: number;

  @Field()
  totalProvinces: number;

  @Field()
  totalCities: number;
}

@ObjectType()
export class RegionModel {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field(() => String, { nullable: true })
  description?: string | null;

  @Field(() => GraphQLJSON, { nullable: true })
  territory?: TerritoryMap | null;

  @Field(() => String, { nullable: true })
  color?: string | null;

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
