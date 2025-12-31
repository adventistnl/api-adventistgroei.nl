import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyStatusHistoryWhereUniqueInput } from './subsidy-status-history-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyStatusHistoryUpdateWithoutSubsidy_requestInput } from './subsidy-status-history-update-without-subsidy-request.input';
import { SubsidyStatusHistoryCreateWithoutSubsidy_requestInput } from './subsidy-status-history-create-without-subsidy-request.input';

@InputType()
export class SubsidyStatusHistoryUpsertWithWhereUniqueWithoutSubsidy_requestInput {

    @Field(() => SubsidyStatusHistoryWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyStatusHistoryWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyStatusHistoryWhereUniqueInput, 'id'>;

    @Field(() => SubsidyStatusHistoryUpdateWithoutSubsidy_requestInput, {nullable:false})
    @Type(() => SubsidyStatusHistoryUpdateWithoutSubsidy_requestInput)
    update!: SubsidyStatusHistoryUpdateWithoutSubsidy_requestInput;

    @Field(() => SubsidyStatusHistoryCreateWithoutSubsidy_requestInput, {nullable:false})
    @Type(() => SubsidyStatusHistoryCreateWithoutSubsidy_requestInput)
    create!: SubsidyStatusHistoryCreateWithoutSubsidy_requestInput;
}
