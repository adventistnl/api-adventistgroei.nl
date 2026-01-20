import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyStatusHistoryWhereInput } from './subsidy-status-history-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManySubsidyStatusHistoryArgs {

    @Field(() => SubsidyStatusHistoryWhereInput, {nullable:true})
    @Type(() => SubsidyStatusHistoryWhereInput)
    where?: SubsidyStatusHistoryWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
