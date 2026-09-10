import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssignmentUpdateManyMutationInput } from './assignment-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AssignmentWhereInput } from './assignment-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyAssignmentArgs {

    @Field(() => AssignmentUpdateManyMutationInput, {nullable:false})
    @Type(() => AssignmentUpdateManyMutationInput)
    data!: AssignmentUpdateManyMutationInput;

    @Field(() => AssignmentWhereInput, {nullable:true})
    @Type(() => AssignmentWhereInput)
    where?: AssignmentWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
