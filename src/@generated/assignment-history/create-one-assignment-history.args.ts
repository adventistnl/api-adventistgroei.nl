import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssignmentHistoryCreateInput } from './assignment-history-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAssignmentHistoryArgs {

    @Field(() => AssignmentHistoryCreateInput, {nullable:false})
    @Type(() => AssignmentHistoryCreateInput)
    data!: AssignmentHistoryCreateInput;
}
