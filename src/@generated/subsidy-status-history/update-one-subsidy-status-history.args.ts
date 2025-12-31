import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyStatusHistoryUpdateInput } from './subsidy-status-history-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { SubsidyStatusHistoryWhereUniqueInput } from './subsidy-status-history-where-unique.input';

@ArgsType()
export class UpdateOneSubsidyStatusHistoryArgs {

    @Field(() => SubsidyStatusHistoryUpdateInput, {nullable:false})
    @Type(() => SubsidyStatusHistoryUpdateInput)
    data!: SubsidyStatusHistoryUpdateInput;

    @Field(() => SubsidyStatusHistoryWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyStatusHistoryWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyStatusHistoryWhereUniqueInput, 'id'>;
}
