import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssignmentRequestWhereInput } from './assignment-request-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyAssignmentRequestArgs {

    @Field(() => AssignmentRequestWhereInput, {nullable:true})
    @Type(() => AssignmentRequestWhereInput)
    where?: AssignmentRequestWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
