import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyStatusHistoryUpdateManyMutationInput } from './subsidy-status-history-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SubsidyStatusHistoryWhereInput } from './subsidy-status-history-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManySubsidyStatusHistoryArgs {

    @Field(() => SubsidyStatusHistoryUpdateManyMutationInput, {nullable:false})
    @Type(() => SubsidyStatusHistoryUpdateManyMutationInput)
    data!: SubsidyStatusHistoryUpdateManyMutationInput;

    @Field(() => SubsidyStatusHistoryWhereInput, {nullable:true})
    @Type(() => SubsidyStatusHistoryWhereInput)
    where?: SubsidyStatusHistoryWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
