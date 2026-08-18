import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchWhereInput } from './church-where.input';
import { Type } from 'class-transformer';
import { ChurchUpdateWithoutAssignmentsInput } from './church-update-without-assignments.input';

@InputType()
export class ChurchUpdateToOneWithWhereWithoutAssignmentsInput {

    @Field(() => ChurchWhereInput, {nullable:true})
    @Type(() => ChurchWhereInput)
    where?: ChurchWhereInput;

    @Field(() => ChurchUpdateWithoutAssignmentsInput, {nullable:false})
    @Type(() => ChurchUpdateWithoutAssignmentsInput)
    data!: ChurchUpdateWithoutAssignmentsInput;
}
