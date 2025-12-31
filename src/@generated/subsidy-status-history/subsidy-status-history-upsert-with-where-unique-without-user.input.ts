import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyStatusHistoryWhereUniqueInput } from './subsidy-status-history-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyStatusHistoryUpdateWithoutUserInput } from './subsidy-status-history-update-without-user.input';
import { SubsidyStatusHistoryCreateWithoutUserInput } from './subsidy-status-history-create-without-user.input';

@InputType()
export class SubsidyStatusHistoryUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => SubsidyStatusHistoryWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyStatusHistoryWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyStatusHistoryWhereUniqueInput, 'id'>;

    @Field(() => SubsidyStatusHistoryUpdateWithoutUserInput, {nullable:false})
    @Type(() => SubsidyStatusHistoryUpdateWithoutUserInput)
    update!: SubsidyStatusHistoryUpdateWithoutUserInput;

    @Field(() => SubsidyStatusHistoryCreateWithoutUserInput, {nullable:false})
    @Type(() => SubsidyStatusHistoryCreateWithoutUserInput)
    create!: SubsidyStatusHistoryCreateWithoutUserInput;
}
