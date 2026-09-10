import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';
import { Type } from 'class-transformer';
import { ChurchCreateWithoutAssignmentsInput } from './church-create-without-assignments.input';

@InputType()
export class ChurchCreateOrConnectWithoutAssignmentsInput {

    @Field(() => ChurchWhereUniqueInput, {nullable:false})
    @Type(() => ChurchWhereUniqueInput)
    where!: Prisma.AtLeast<ChurchWhereUniqueInput, 'id' | 'leader_id'>;

    @Field(() => ChurchCreateWithoutAssignmentsInput, {nullable:false})
    @Type(() => ChurchCreateWithoutAssignmentsInput)
    create!: ChurchCreateWithoutAssignmentsInput;
}
