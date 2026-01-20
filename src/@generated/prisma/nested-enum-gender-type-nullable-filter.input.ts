import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenderType } from './gender-type.enum';

@InputType()
export class NestedEnumGenderTypeNullableFilter {

    @Field(() => GenderType, {nullable:true})
    equals?: `${GenderType}`;

    @Field(() => [GenderType], {nullable:true})
    in?: Array<`${GenderType}`>;

    @Field(() => [GenderType], {nullable:true})
    notIn?: Array<`${GenderType}`>;

    @Field(() => NestedEnumGenderTypeNullableFilter, {nullable:true})
    not?: NestedEnumGenderTypeNullableFilter;
}
