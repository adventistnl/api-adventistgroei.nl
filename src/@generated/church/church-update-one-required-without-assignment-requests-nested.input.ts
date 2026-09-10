import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchCreateWithoutAssignment_requestsInput } from './church-create-without-assignment-requests.input';
import { Type } from 'class-transformer';
import { ChurchCreateOrConnectWithoutAssignment_requestsInput } from './church-create-or-connect-without-assignment-requests.input';
import { ChurchUpsertWithoutAssignment_requestsInput } from './church-upsert-without-assignment-requests.input';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';
import { ChurchUpdateToOneWithWhereWithoutAssignment_requestsInput } from './church-update-to-one-with-where-without-assignment-requests.input';

@InputType()
export class ChurchUpdateOneRequiredWithoutAssignment_requestsNestedInput {

    @Field(() => ChurchCreateWithoutAssignment_requestsInput, {nullable:true})
    @Type(() => ChurchCreateWithoutAssignment_requestsInput)
    create?: ChurchCreateWithoutAssignment_requestsInput;

    @Field(() => ChurchCreateOrConnectWithoutAssignment_requestsInput, {nullable:true})
    @Type(() => ChurchCreateOrConnectWithoutAssignment_requestsInput)
    connectOrCreate?: ChurchCreateOrConnectWithoutAssignment_requestsInput;

    @Field(() => ChurchUpsertWithoutAssignment_requestsInput, {nullable:true})
    @Type(() => ChurchUpsertWithoutAssignment_requestsInput)
    upsert?: ChurchUpsertWithoutAssignment_requestsInput;

    @Field(() => ChurchWhereUniqueInput, {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    connect?: Prisma.AtLeast<ChurchWhereUniqueInput, 'id' | 'leader_id'>;

    @Field(() => ChurchUpdateToOneWithWhereWithoutAssignment_requestsInput, {nullable:true})
    @Type(() => ChurchUpdateToOneWithWhereWithoutAssignment_requestsInput)
    update?: ChurchUpdateToOneWithWhereWithoutAssignment_requestsInput;
}
