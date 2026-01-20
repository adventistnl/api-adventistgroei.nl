import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusHistoryWhereInput } from './subsidy-status-history-where.input';

@InputType()
export class SubsidyStatusHistoryListRelationFilter {

    @Field(() => SubsidyStatusHistoryWhereInput, {nullable:true})
    every?: SubsidyStatusHistoryWhereInput;

    @Field(() => SubsidyStatusHistoryWhereInput, {nullable:true})
    some?: SubsidyStatusHistoryWhereInput;

    @Field(() => SubsidyStatusHistoryWhereInput, {nullable:true})
    none?: SubsidyStatusHistoryWhereInput;
}
