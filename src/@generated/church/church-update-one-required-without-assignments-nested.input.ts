import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchCreateWithoutAssignmentsInput } from './church-create-without-assignments.input';
import { Type } from 'class-transformer';
import { ChurchCreateOrConnectWithoutAssignmentsInput } from './church-create-or-connect-without-assignments.input';
import { ChurchUpsertWithoutAssignmentsInput } from './church-upsert-without-assignments.input';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';
import { ChurchUpdateToOneWithWhereWithoutAssignmentsInput } from './church-update-to-one-with-where-without-assignments.input';

@InputType()
export class ChurchUpdateOneRequiredWithoutAssignmentsNestedInput {

    @Field(() => ChurchCreateWithoutAssignmentsInput, {nullable:true})
    @Type(() => ChurchCreateWithoutAssignmentsInput)
    create?: ChurchCreateWithoutAssignmentsInput;

    @Field(() => ChurchCreateOrConnectWithoutAssignmentsInput, {nullable:true})
    @Type(() => ChurchCreateOrConnectWithoutAssignmentsInput)
    connectOrCreate?: ChurchCreateOrConnectWithoutAssignmentsInput;

    @Field(() => ChurchUpsertWithoutAssignmentsInput, {nullable:true})
    @Type(() => ChurchUpsertWithoutAssignmentsInput)
    upsert?: ChurchUpsertWithoutAssignmentsInput;

    @Field(() => ChurchWhereUniqueInput, {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    connect?: Prisma.AtLeast<ChurchWhereUniqueInput, 'id' | 'leader_id'>;

    @Field(() => ChurchUpdateToOneWithWhereWithoutAssignmentsInput, {nullable:true})
    @Type(() => ChurchUpdateToOneWithWhereWithoutAssignmentsInput)
    update?: ChurchUpdateToOneWithWhereWithoutAssignmentsInput;
}
