import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';
import { Type } from 'class-transformer';
import { ChurchCreateWithoutAssignment_requestsInput } from './church-create-without-assignment-requests.input';

@InputType()
export class ChurchCreateOrConnectWithoutAssignment_requestsInput {

    @Field(() => ChurchWhereUniqueInput, {nullable:false})
    @Type(() => ChurchWhereUniqueInput)
    where!: Prisma.AtLeast<ChurchWhereUniqueInput, 'id' | 'leader_id'>;

    @Field(() => ChurchCreateWithoutAssignment_requestsInput, {nullable:false})
    @Type(() => ChurchCreateWithoutAssignment_requestsInput)
    create!: ChurchCreateWithoutAssignment_requestsInput;
}
