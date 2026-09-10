import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionUpdateWithoutAssignmentsInput } from './institution-update-without-assignments.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutAssignmentsInput } from './institution-create-without-assignments.input';
import { InstitutionWhereInput } from './institution-where.input';

@InputType()
export class InstitutionUpsertWithoutAssignmentsInput {

    @Field(() => InstitutionUpdateWithoutAssignmentsInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutAssignmentsInput)
    update!: InstitutionUpdateWithoutAssignmentsInput;

    @Field(() => InstitutionCreateWithoutAssignmentsInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutAssignmentsInput)
    create!: InstitutionCreateWithoutAssignmentsInput;

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;
}
