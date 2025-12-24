import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutActivity_assignmentsInput } from '../user/user-create-nested-one-without-activity-assignments.input';
import { Type } from 'class-transformer';

@InputType()
export class ProjectActivityAssigneeCreateWithoutActivityInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => UserCreateNestedOneWithoutActivity_assignmentsInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutActivity_assignmentsInput)
    user!: UserCreateNestedOneWithoutActivity_assignmentsInput;
}
