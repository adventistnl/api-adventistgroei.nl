import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentScalarWhereInput } from './assignment-scalar-where.input';
import { Type } from 'class-transformer';
import { AssignmentUpdateManyMutationInput } from './assignment-update-many-mutation.input';

@InputType()
export class AssignmentUpdateManyWithWhereWithoutUserInput {

    @Field(() => AssignmentScalarWhereInput, {nullable:false})
    @Type(() => AssignmentScalarWhereInput)
    where!: AssignmentScalarWhereInput;

    @Field(() => AssignmentUpdateManyMutationInput, {nullable:false})
    @Type(() => AssignmentUpdateManyMutationInput)
    data!: AssignmentUpdateManyMutationInput;
}
