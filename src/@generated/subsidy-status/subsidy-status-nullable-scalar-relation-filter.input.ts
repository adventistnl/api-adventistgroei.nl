import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusWhereInput } from './subsidy-status-where.input';

@InputType()
export class SubsidyStatusNullableScalarRelationFilter {

    @Field(() => SubsidyStatusWhereInput, {nullable:true})
    is?: SubsidyStatusWhereInput;

    @Field(() => SubsidyStatusWhereInput, {nullable:true})
    isNot?: SubsidyStatusWhereInput;
}
