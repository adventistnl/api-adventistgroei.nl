import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyStatusHistoryWhereUniqueInput } from './subsidy-status-history-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyStatusHistoryUpdateWithoutStatusInput } from './subsidy-status-history-update-without-status.input';
import { SubsidyStatusHistoryCreateWithoutStatusInput } from './subsidy-status-history-create-without-status.input';

@InputType()
export class SubsidyStatusHistoryUpsertWithWhereUniqueWithoutStatusInput {

    @Field(() => SubsidyStatusHistoryWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyStatusHistoryWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyStatusHistoryWhereUniqueInput, 'id'>;

    @Field(() => SubsidyStatusHistoryUpdateWithoutStatusInput, {nullable:false})
    @Type(() => SubsidyStatusHistoryUpdateWithoutStatusInput)
    update!: SubsidyStatusHistoryUpdateWithoutStatusInput;

    @Field(() => SubsidyStatusHistoryCreateWithoutStatusInput, {nullable:false})
    @Type(() => SubsidyStatusHistoryCreateWithoutStatusInput)
    create!: SubsidyStatusHistoryCreateWithoutStatusInput;
}
