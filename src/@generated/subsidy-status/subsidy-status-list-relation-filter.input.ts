import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusWhereInput } from './subsidy-status-where.input';

@InputType()
export class SubsidyStatusListRelationFilter {

    @Field(() => SubsidyStatusWhereInput, {nullable:true})
    every?: SubsidyStatusWhereInput;

    @Field(() => SubsidyStatusWhereInput, {nullable:true})
    some?: SubsidyStatusWhereInput;

    @Field(() => SubsidyStatusWhereInput, {nullable:true})
    none?: SubsidyStatusWhereInput;
}
