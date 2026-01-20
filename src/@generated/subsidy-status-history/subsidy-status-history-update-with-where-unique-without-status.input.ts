import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyStatusHistoryWhereUniqueInput } from './subsidy-status-history-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyStatusHistoryUpdateWithoutStatusInput } from './subsidy-status-history-update-without-status.input';

@InputType()
export class SubsidyStatusHistoryUpdateWithWhereUniqueWithoutStatusInput {

    @Field(() => SubsidyStatusHistoryWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyStatusHistoryWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyStatusHistoryWhereUniqueInput, 'id'>;

    @Field(() => SubsidyStatusHistoryUpdateWithoutStatusInput, {nullable:false})
    @Type(() => SubsidyStatusHistoryUpdateWithoutStatusInput)
    data!: SubsidyStatusHistoryUpdateWithoutStatusInput;
}
