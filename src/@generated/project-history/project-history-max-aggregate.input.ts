import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ProjectHistoryMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    project_id?: true;

    @Field(() => Boolean, {nullable:true})
    user_id?: true;

    @Field(() => Boolean, {nullable:true})
    type?: true;

    @Field(() => Boolean, {nullable:true})
    comment?: true;

    @Field(() => Boolean, {nullable:true})
    field_name?: true;

    @Field(() => Boolean, {nullable:true})
    old_value?: true;

    @Field(() => Boolean, {nullable:true})
    new_value?: true;

    @Field(() => Boolean, {nullable:true})
    created_at?: true;
}
