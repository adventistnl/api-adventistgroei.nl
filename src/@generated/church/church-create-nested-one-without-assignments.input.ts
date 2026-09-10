import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchCreateWithoutAssignmentsInput } from './church-create-without-assignments.input';
import { Type } from 'class-transformer';
import { ChurchCreateOrConnectWithoutAssignmentsInput } from './church-create-or-connect-without-assignments.input';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';

@InputType()
export class ChurchCreateNestedOneWithoutAssignmentsInput {

    @Field(() => ChurchCreateWithoutAssignmentsInput, {nullable:true})
    @Type(() => ChurchCreateWithoutAssignmentsInput)
    create?: ChurchCreateWithoutAssignmentsInput;

    @Field(() => ChurchCreateOrConnectWithoutAssignmentsInput, {nullable:true})
    @Type(() => ChurchCreateOrConnectWithoutAssignmentsInput)
    connectOrCreate?: ChurchCreateOrConnectWithoutAssignmentsInput;

    @Field(() => ChurchWhereUniqueInput, {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    connect?: Prisma.AtLeast<ChurchWhereUniqueInput, 'id' | 'leader_id'>;
}
