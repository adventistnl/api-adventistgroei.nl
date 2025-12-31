import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyStatusHistoryWhereUniqueInput } from './subsidy-status-history-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyStatusHistoryCreateWithoutPrevious_statusInput } from './subsidy-status-history-create-without-previous-status.input';

@InputType()
export class SubsidyStatusHistoryCreateOrConnectWithoutPrevious_statusInput {

    @Field(() => SubsidyStatusHistoryWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyStatusHistoryWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyStatusHistoryWhereUniqueInput, 'id'>;

    @Field(() => SubsidyStatusHistoryCreateWithoutPrevious_statusInput, {nullable:false})
    @Type(() => SubsidyStatusHistoryCreateWithoutPrevious_statusInput)
    create!: SubsidyStatusHistoryCreateWithoutPrevious_statusInput;
}
