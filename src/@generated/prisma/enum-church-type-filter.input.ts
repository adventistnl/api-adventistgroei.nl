import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchType } from './church-type.enum';
import { NestedEnumChurchTypeFilter } from './nested-enum-church-type-filter.input';

@InputType()
export class EnumChurchTypeFilter {

    @Field(() => ChurchType, {nullable:true})
    equals?: `${ChurchType}`;

    @Field(() => [ChurchType], {nullable:true})
    in?: Array<`${ChurchType}`>;

    @Field(() => [ChurchType], {nullable:true})
    notIn?: Array<`${ChurchType}`>;

    @Field(() => NestedEnumChurchTypeFilter, {nullable:true})
    not?: NestedEnumChurchTypeFilter;
}
