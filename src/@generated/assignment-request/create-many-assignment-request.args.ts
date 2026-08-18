import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssignmentRequestCreateManyInput } from './assignment-request-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAssignmentRequestArgs {

    @Field(() => [AssignmentRequestCreateManyInput], {nullable:false})
    @Type(() => AssignmentRequestCreateManyInput)
    data!: Array<AssignmentRequestCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
