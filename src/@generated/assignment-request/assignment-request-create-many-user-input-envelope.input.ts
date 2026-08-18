import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentRequestCreateManyUserInput } from './assignment-request-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class AssignmentRequestCreateManyUserInputEnvelope {

    @Field(() => [AssignmentRequestCreateManyUserInput], {nullable:false})
    @Type(() => AssignmentRequestCreateManyUserInput)
    data!: Array<AssignmentRequestCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
