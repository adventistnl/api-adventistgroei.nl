import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentCreateManyUserInput } from './assignment-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class AssignmentCreateManyUserInputEnvelope {

    @Field(() => [AssignmentCreateManyUserInput], {nullable:false})
    @Type(() => AssignmentCreateManyUserInput)
    data!: Array<AssignmentCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
