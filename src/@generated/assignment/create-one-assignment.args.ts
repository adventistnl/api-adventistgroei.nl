import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssignmentCreateInput } from './assignment-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAssignmentArgs {

    @Field(() => AssignmentCreateInput, {nullable:false})
    @Type(() => AssignmentCreateInput)
    data!: AssignmentCreateInput;
}
