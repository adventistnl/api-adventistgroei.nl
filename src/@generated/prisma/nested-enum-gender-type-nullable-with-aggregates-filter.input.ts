import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenderType } from './gender-type.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumGenderTypeNullableFilter } from './nested-enum-gender-type-nullable-filter.input';

@InputType()
export class NestedEnumGenderTypeNullableWithAggregatesFilter {

    @Field(() => GenderType, {nullable:true})
    equals?: `${GenderType}`;

    @Field(() => [GenderType], {nullable:true})
    in?: Array<`${GenderType}`>;

    @Field(() => [GenderType], {nullable:true})
    notIn?: Array<`${GenderType}`>;

    @Field(() => NestedEnumGenderTypeNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumGenderTypeNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumGenderTypeNullableFilter, {nullable:true})
    _min?: NestedEnumGenderTypeNullableFilter;

    @Field(() => NestedEnumGenderTypeNullableFilter, {nullable:true})
    _max?: NestedEnumGenderTypeNullableFilter;
}
