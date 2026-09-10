import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AssignmentHistoryMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    assignment_id?: string;

    @Field(() => String, {nullable:true})
    field_name?: string;

    @Field(() => String, {nullable:true})
    old_value?: string;

    @Field(() => String, {nullable:true})
    new_value?: string;

    @Field(() => String, {nullable:true})
    changed_by?: string;

    @Field(() => Date, {nullable:true})
    changed_at?: Date | string;
}
