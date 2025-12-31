import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyStatusHistoryWhereUniqueInput } from './subsidy-status-history-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyStatusHistoryUpdateWithoutSubsidy_requestInput } from './subsidy-status-history-update-without-subsidy-request.input';

@InputType()
export class SubsidyStatusHistoryUpdateWithWhereUniqueWithoutSubsidy_requestInput {

    @Field(() => SubsidyStatusHistoryWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyStatusHistoryWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyStatusHistoryWhereUniqueInput, 'id'>;

    @Field(() => SubsidyStatusHistoryUpdateWithoutSubsidy_requestInput, {nullable:false})
    @Type(() => SubsidyStatusHistoryUpdateWithoutSubsidy_requestInput)
    data!: SubsidyStatusHistoryUpdateWithoutSubsidy_requestInput;
}
