import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AssignmentHistoryCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    assignment_id!: string;

    @Field(() => String, {nullable:false})
    field_name!: string;

    @Field(() => String, {nullable:true})
    old_value?: string;

    @Field(() => String, {nullable:true})
    new_value?: string;

    @Field(() => String, {nullable:false})
    changed_by!: string;

    @Field(() => Date, {nullable:true})
    changed_at?: Date | string;
}
