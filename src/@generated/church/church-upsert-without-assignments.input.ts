import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchUpdateWithoutAssignmentsInput } from './church-update-without-assignments.input';
import { Type } from 'class-transformer';
import { ChurchCreateWithoutAssignmentsInput } from './church-create-without-assignments.input';
import { ChurchWhereInput } from './church-where.input';

@InputType()
export class ChurchUpsertWithoutAssignmentsInput {

    @Field(() => ChurchUpdateWithoutAssignmentsInput, {nullable:false})
    @Type(() => ChurchUpdateWithoutAssignmentsInput)
    update!: ChurchUpdateWithoutAssignmentsInput;

    @Field(() => ChurchCreateWithoutAssignmentsInput, {nullable:false})
    @Type(() => ChurchCreateWithoutAssignmentsInput)
    create!: ChurchCreateWithoutAssignmentsInput;

    @Field(() => ChurchWhereInput, {nullable:true})
    @Type(() => ChurchWhereInput)
    where?: ChurchWhereInput;
}
