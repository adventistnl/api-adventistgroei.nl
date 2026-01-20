import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyStatusHistoryWhereUniqueInput } from './subsidy-status-history-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyStatusHistoryCreateWithoutSubsidy_requestInput } from './subsidy-status-history-create-without-subsidy-request.input';

@InputType()
export class SubsidyStatusHistoryCreateOrConnectWithoutSubsidy_requestInput {

    @Field(() => SubsidyStatusHistoryWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyStatusHistoryWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyStatusHistoryWhereUniqueInput, 'id'>;

    @Field(() => SubsidyStatusHistoryCreateWithoutSubsidy_requestInput, {nullable:false})
    @Type(() => SubsidyStatusHistoryCreateWithoutSubsidy_requestInput)
    create!: SubsidyStatusHistoryCreateWithoutSubsidy_requestInput;
}
