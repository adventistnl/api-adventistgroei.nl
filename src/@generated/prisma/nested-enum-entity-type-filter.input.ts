import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EntityType } from './entity-type.enum';

@InputType()
export class NestedEnumEntityTypeFilter {

    @Field(() => EntityType, {nullable:true})
    equals?: `${EntityType}`;

    @Field(() => [EntityType], {nullable:true})
    in?: Array<`${EntityType}`>;

    @Field(() => [EntityType], {nullable:true})
    notIn?: Array<`${EntityType}`>;

    @Field(() => NestedEnumEntityTypeFilter, {nullable:true})
    not?: NestedEnumEntityTypeFilter;
}
