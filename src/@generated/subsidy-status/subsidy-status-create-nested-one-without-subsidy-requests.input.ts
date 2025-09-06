import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusCreateWithoutSubsidy_requestsInput } from './subsidy-status-create-without-subsidy-requests.input';
import { Type } from 'class-transformer';
import { SubsidyStatusCreateOrConnectWithoutSubsidy_requestsInput } from './subsidy-status-create-or-connect-without-subsidy-requests.input';
import { Prisma } from '@prisma/client';
import { SubsidyStatusWhereUniqueInput } from './subsidy-status-where-unique.input';

@InputType()
export class SubsidyStatusCreateNestedOneWithoutSubsidy_requestsInput {

    @Field(() => SubsidyStatusCreateWithoutSubsidy_requestsInput, {nullable:true})
    @Type(() => SubsidyStatusCreateWithoutSubsidy_requestsInput)
    create?: SubsidyStatusCreateWithoutSubsidy_requestsInput;

    @Field(() => SubsidyStatusCreateOrConnectWithoutSubsidy_requestsInput, {nullable:true})
    @Type(() => SubsidyStatusCreateOrConnectWithoutSubsidy_requestsInput)
    connectOrCreate?: SubsidyStatusCreateOrConnectWithoutSubsidy_requestsInput;

    @Field(() => SubsidyStatusWhereUniqueInput, {nullable:true})
    @Type(() => SubsidyStatusWhereUniqueInput)
    connect?: Prisma.AtLeast<SubsidyStatusWhereUniqueInput, 'id'>;
}
