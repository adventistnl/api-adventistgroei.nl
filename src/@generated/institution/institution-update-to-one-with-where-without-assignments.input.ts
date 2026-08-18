import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionWhereInput } from './institution-where.input';
import { Type } from 'class-transformer';
import { InstitutionUpdateWithoutAssignmentsInput } from './institution-update-without-assignments.input';

@InputType()
export class InstitutionUpdateToOneWithWhereWithoutAssignmentsInput {

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;

    @Field(() => InstitutionUpdateWithoutAssignmentsInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutAssignmentsInput)
    data!: InstitutionUpdateWithoutAssignmentsInput;
}
