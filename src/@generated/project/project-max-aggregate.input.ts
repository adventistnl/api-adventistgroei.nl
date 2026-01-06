import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ProjectMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    department_id?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    budget?: true;

    @Field(() => Boolean, {nullable:true})
    subsidized_budget?: true;

    @Field(() => Boolean, {nullable:true})
    balance?: true;

    @Field(() => Boolean, {nullable:true})
    owner_id?: true;

    @Field(() => Boolean, {nullable:true})
    language_preference?: true;

    @Field(() => Boolean, {nullable:true})
    type?: true;

    @Field(() => Boolean, {nullable:true})
    is_private?: true;

    @Field(() => Boolean, {nullable:true})
    required_volunteers?: true;

    @Field(() => Boolean, {nullable:true})
    start_at?: true;

    @Field(() => Boolean, {nullable:true})
    end_at?: true;

    @Field(() => Boolean, {nullable:true})
    created_at?: true;

    @Field(() => Boolean, {nullable:true})
    updated_at?: true;

    @Field(() => Boolean, {nullable:true})
    deadline?: true;

    @Field(() => Boolean, {nullable:true})
    created_by?: true;

    @Field(() => Boolean, {nullable:true})
    updated_by?: true;

    @Field(() => Boolean, {nullable:true})
    is_deleted?: true;

    @Field(() => Boolean, {nullable:true})
    deleted_at?: true;

    @Field(() => Boolean, {nullable:true})
    deleted_by?: true;

    @Field(() => Boolean, {nullable:true})
    event_id?: true;

    @Field(() => Boolean, {nullable:true})
    institution_id?: true;
}
