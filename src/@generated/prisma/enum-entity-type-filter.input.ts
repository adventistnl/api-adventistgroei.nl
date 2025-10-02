import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EntityType } from './entity-type.enum';
import { NestedEnumEntityTypeFilter } from './nested-enum-entity-type-filter.input';

@InputType()
export class EnumEntityTypeFilter {

    @Field(() => EntityType, {nullable:true})
    equals?: `${EntityType}`;

    @Field(() => [EntityType], {nullable:true})
    in?: Array<`${EntityType}`>;

    @Field(() => [EntityType], {nullable:true})
    notIn?: Array<`${EntityType}`>;

    @Field(() => NestedEnumEntityTypeFilter, {nullable:true})
    not?: NestedEnumEntityTypeFilter;
}
