import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchCreateWithoutAssignment_requestsInput } from './church-create-without-assignment-requests.input';
import { Type } from 'class-transformer';
import { ChurchCreateOrConnectWithoutAssignment_requestsInput } from './church-create-or-connect-without-assignment-requests.input';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';

@InputType()
export class ChurchCreateNestedOneWithoutAssignment_requestsInput {

    @Field(() => ChurchCreateWithoutAssignment_requestsInput, {nullable:true})
    @Type(() => ChurchCreateWithoutAssignment_requestsInput)
    create?: ChurchCreateWithoutAssignment_requestsInput;

    @Field(() => ChurchCreateOrConnectWithoutAssignment_requestsInput, {nullable:true})
    @Type(() => ChurchCreateOrConnectWithoutAssignment_requestsInput)
    connectOrCreate?: ChurchCreateOrConnectWithoutAssignment_requestsInput;

    @Field(() => ChurchWhereUniqueInput, {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    connect?: Prisma.AtLeast<ChurchWhereUniqueInput, 'id' | 'leader_id'>;
}
