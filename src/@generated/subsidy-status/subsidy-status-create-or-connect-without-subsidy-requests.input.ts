import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyStatusWhereUniqueInput } from './subsidy-status-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyStatusCreateWithoutSubsidy_requestsInput } from './subsidy-status-create-without-subsidy-requests.input';

@InputType()
export class SubsidyStatusCreateOrConnectWithoutSubsidy_requestsInput {

    @Field(() => SubsidyStatusWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyStatusWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyStatusWhereUniqueInput, 'id'>;

    @Field(() => SubsidyStatusCreateWithoutSubsidy_requestsInput, {nullable:false})
    @Type(() => SubsidyStatusCreateWithoutSubsidy_requestsInput)
    create!: SubsidyStatusCreateWithoutSubsidy_requestsInput;
}
