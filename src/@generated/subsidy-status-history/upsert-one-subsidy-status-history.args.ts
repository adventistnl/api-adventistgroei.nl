import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyStatusHistoryWhereUniqueInput } from './subsidy-status-history-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyStatusHistoryCreateInput } from './subsidy-status-history-create.input';
import { SubsidyStatusHistoryUpdateInput } from './subsidy-status-history-update.input';

@ArgsType()
export class UpsertOneSubsidyStatusHistoryArgs {

    @Field(() => SubsidyStatusHistoryWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyStatusHistoryWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyStatusHistoryWhereUniqueInput, 'id'>;

    @Field(() => SubsidyStatusHistoryCreateInput, {nullable:false})
    @Type(() => SubsidyStatusHistoryCreateInput)
    create!: SubsidyStatusHistoryCreateInput;

    @Field(() => SubsidyStatusHistoryUpdateInput, {nullable:false})
    @Type(() => SubsidyStatusHistoryUpdateInput)
    update!: SubsidyStatusHistoryUpdateInput;
}
