import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchClassification } from './church-classification.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumChurchClassificationFilter } from './nested-enum-church-classification-filter.input';

@InputType()
export class NestedEnumChurchClassificationWithAggregatesFilter {

    @Field(() => ChurchClassification, {nullable:true})
    equals?: `${ChurchClassification}`;

    @Field(() => [ChurchClassification], {nullable:true})
    in?: Array<`${ChurchClassification}`>;

    @Field(() => [ChurchClassification], {nullable:true})
    notIn?: Array<`${ChurchClassification}`>;

    @Field(() => NestedEnumChurchClassificationWithAggregatesFilter, {nullable:true})
    not?: NestedEnumChurchClassificationWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumChurchClassificationFilter, {nullable:true})
    _min?: NestedEnumChurchClassificationFilter;

    @Field(() => NestedEnumChurchClassificationFilter, {nullable:true})
    _max?: NestedEnumChurchClassificationFilter;
}
