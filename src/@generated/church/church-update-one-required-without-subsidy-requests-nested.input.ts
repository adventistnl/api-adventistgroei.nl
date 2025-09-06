import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchCreateWithoutSubsidy_requestsInput } from './church-create-without-subsidy-requests.input';
import { Type } from 'class-transformer';
import { ChurchCreateOrConnectWithoutSubsidy_requestsInput } from './church-create-or-connect-without-subsidy-requests.input';
import { ChurchUpsertWithoutSubsidy_requestsInput } from './church-upsert-without-subsidy-requests.input';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';
import { ChurchUpdateToOneWithWhereWithoutSubsidy_requestsInput } from './church-update-to-one-with-where-without-subsidy-requests.input';

@InputType()
export class ChurchUpdateOneRequiredWithoutSubsidy_requestsNestedInput {

    @Field(() => ChurchCreateWithoutSubsidy_requestsInput, {nullable:true})
    @Type(() => ChurchCreateWithoutSubsidy_requestsInput)
    create?: ChurchCreateWithoutSubsidy_requestsInput;

    @Field(() => ChurchCreateOrConnectWithoutSubsidy_requestsInput, {nullable:true})
    @Type(() => ChurchCreateOrConnectWithoutSubsidy_requestsInput)
    connectOrCreate?: ChurchCreateOrConnectWithoutSubsidy_requestsInput;

    @Field(() => ChurchUpsertWithoutSubsidy_requestsInput, {nullable:true})
    @Type(() => ChurchUpsertWithoutSubsidy_requestsInput)
    upsert?: ChurchUpsertWithoutSubsidy_requestsInput;

    @Field(() => ChurchWhereUniqueInput, {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    connect?: Prisma.AtLeast<ChurchWhereUniqueInput, 'id'>;

    @Field(() => ChurchUpdateToOneWithWhereWithoutSubsidy_requestsInput, {nullable:true})
    @Type(() => ChurchUpdateToOneWithWhereWithoutSubsidy_requestsInput)
    update?: ChurchUpdateToOneWithWhereWithoutSubsidy_requestsInput;
}
