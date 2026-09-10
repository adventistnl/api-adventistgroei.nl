import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssignmentRequestCreateInput } from './assignment-request-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAssignmentRequestArgs {

    @Field(() => AssignmentRequestCreateInput, {nullable:false})
    @Type(() => AssignmentRequestCreateInput)
    data!: AssignmentRequestCreateInput;
}
