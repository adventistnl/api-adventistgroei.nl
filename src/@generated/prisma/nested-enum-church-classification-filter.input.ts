import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchClassification } from './church-classification.enum';

@InputType()
export class NestedEnumChurchClassificationFilter {

    @Field(() => ChurchClassification, {nullable:true})
    equals?: `${ChurchClassification}`;

    @Field(() => [ChurchClassification], {nullable:true})
    in?: Array<`${ChurchClassification}`>;

    @Field(() => [ChurchClassification], {nullable:true})
    notIn?: Array<`${ChurchClassification}`>;

    @Field(() => NestedEnumChurchClassificationFilter, {nullable:true})
    not?: NestedEnumChurchClassificationFilter;
}
