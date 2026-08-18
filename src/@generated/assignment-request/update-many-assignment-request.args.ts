import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssignmentRequestUpdateManyMutationInput } from './assignment-request-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AssignmentRequestWhereInput } from './assignment-request-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyAssignmentRequestArgs {

    @Field(() => AssignmentRequestUpdateManyMutationInput, {nullable:false})
    @Type(() => AssignmentRequestUpdateManyMutationInput)
    data!: AssignmentRequestUpdateManyMutationInput;

    @Field(() => AssignmentRequestWhereInput, {nullable:true})
    @Type(() => AssignmentRequestWhereInput)
    where?: AssignmentRequestWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
