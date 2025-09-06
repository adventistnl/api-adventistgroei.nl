import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusCreateWithoutSubsidy_requestsInput } from './subsidy-status-create-without-subsidy-requests.input';
import { Type } from 'class-transformer';
import { SubsidyStatusCreateOrConnectWithoutSubsidy_requestsInput } from './subsidy-status-create-or-connect-without-subsidy-requests.input';
import { SubsidyStatusUpsertWithoutSubsidy_requestsInput } from './subsidy-status-upsert-without-subsidy-requests.input';
import { Prisma } from '@prisma/client';
import { SubsidyStatusWhereUniqueInput } from './subsidy-status-where-unique.input';
import { SubsidyStatusUpdateToOneWithWhereWithoutSubsidy_requestsInput } from './subsidy-status-update-to-one-with-where-without-subsidy-requests.input';

@InputType()
export class SubsidyStatusUpdateOneRequiredWithoutSubsidy_requestsNestedInput {

    @Field(() => SubsidyStatusCreateWithoutSubsidy_requestsInput, {nullable:true})
    @Type(() => SubsidyStatusCreateWithoutSubsidy_requestsInput)
    create?: SubsidyStatusCreateWithoutSubsidy_requestsInput;

    @Field(() => SubsidyStatusCreateOrConnectWithoutSubsidy_requestsInput, {nullable:true})
    @Type(() => SubsidyStatusCreateOrConnectWithoutSubsidy_requestsInput)
    connectOrCreate?: SubsidyStatusCreateOrConnectWithoutSubsidy_requestsInput;

    @Field(() => SubsidyStatusUpsertWithoutSubsidy_requestsInput, {nullable:true})
    @Type(() => SubsidyStatusUpsertWithoutSubsidy_requestsInput)
    upsert?: SubsidyStatusUpsertWithoutSubsidy_requestsInput;

    @Field(() => SubsidyStatusWhereUniqueInput, {nullable:true})
    @Type(() => SubsidyStatusWhereUniqueInput)
    connect?: Prisma.AtLeast<SubsidyStatusWhereUniqueInput, 'id'>;

    @Field(() => SubsidyStatusUpdateToOneWithWhereWithoutSubsidy_requestsInput, {nullable:true})
    @Type(() => SubsidyStatusUpdateToOneWithWhereWithoutSubsidy_requestsInput)
    update?: SubsidyStatusUpdateToOneWithWhereWithoutSubsidy_requestsInput;
}
