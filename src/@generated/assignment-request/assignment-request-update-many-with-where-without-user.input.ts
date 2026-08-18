import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentRequestScalarWhereInput } from './assignment-request-scalar-where.input';
import { Type } from 'class-transformer';
import { AssignmentRequestUpdateManyMutationInput } from './assignment-request-update-many-mutation.input';

@InputType()
export class AssignmentRequestUpdateManyWithWhereWithoutUserInput {

    @Field(() => AssignmentRequestScalarWhereInput, {nullable:false})
    @Type(() => AssignmentRequestScalarWhereInput)
    where!: AssignmentRequestScalarWhereInput;

    @Field(() => AssignmentRequestUpdateManyMutationInput, {nullable:false})
    @Type(() => AssignmentRequestUpdateManyMutationInput)
    data!: AssignmentRequestUpdateManyMutationInput;
}
