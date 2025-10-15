import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenderType } from './gender-type.enum';
import { NestedEnumGenderTypeNullableFilter } from './nested-enum-gender-type-nullable-filter.input';

@InputType()
export class EnumGenderTypeNullableFilter {

    @Field(() => GenderType, {nullable:true})
    equals?: `${GenderType}`;

    @Field(() => [GenderType], {nullable:true})
    in?: Array<`${GenderType}`>;

    @Field(() => [GenderType], {nullable:true})
    notIn?: Array<`${GenderType}`>;

    @Field(() => NestedEnumGenderTypeNullableFilter, {nullable:true})
    not?: NestedEnumGenderTypeNullableFilter;
}
