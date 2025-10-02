import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ActivityDocumentsMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    activity_id?: true;

    @Field(() => Boolean, {nullable:true})
    file_url?: true;

    @Field(() => Boolean, {nullable:true})
    type?: true;

    @Field(() => Boolean, {nullable:true})
    is_validated?: true;

    @Field(() => Boolean, {nullable:true})
    uploaded_by?: true;

    @Field(() => Boolean, {nullable:true})
    created_at?: true;

    @Field(() => Boolean, {nullable:true})
    validated_at?: true;

    @Field(() => Boolean, {nullable:true})
    project_activity_id?: true;
}
