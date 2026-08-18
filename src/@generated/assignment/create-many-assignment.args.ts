import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssignmentCreateManyInput } from './assignment-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAssignmentArgs {

    @Field(() => [AssignmentCreateManyInput], {nullable:false})
    @Type(() => AssignmentCreateManyInput)
    data!: Array<AssignmentCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
