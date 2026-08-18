import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class AssignmentHistory {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    assignment_id!: string;

    @Field(() => String, {nullable:false})
    field_name!: string;

    @Field(() => String, {nullable:true})
    old_value!: string | null;

    @Field(() => String, {nullable:true})
    new_value!: string | null;

    @Field(() => String, {nullable:false})
    changed_by!: string;

    @Field(() => Date, {nullable:false})
    changed_at!: Date;
}
