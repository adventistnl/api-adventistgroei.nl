import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyStatusHistoryWhereUniqueInput } from './subsidy-status-history-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyStatusHistoryUpdateWithoutPrevious_statusInput } from './subsidy-status-history-update-without-previous-status.input';

@InputType()
export class SubsidyStatusHistoryUpdateWithWhereUniqueWithoutPrevious_statusInput {

    @Field(() => SubsidyStatusHistoryWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyStatusHistoryWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyStatusHistoryWhereUniqueInput, 'id'>;

    @Field(() => SubsidyStatusHistoryUpdateWithoutPrevious_statusInput, {nullable:false})
    @Type(() => SubsidyStatusHistoryUpdateWithoutPrevious_statusInput)
    data!: SubsidyStatusHistoryUpdateWithoutPrevious_statusInput;
}
