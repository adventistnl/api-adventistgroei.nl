import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ActivityDocumentsMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    activity_id?: string;

    @Field(() => String, {nullable:true})
    file_url?: string;

    @Field(() => String, {nullable:true})
    type?: string;

    @Field(() => Boolean, {nullable:true})
    is_validated?: boolean;

    @Field(() => String, {nullable:true})
    uploaded_by?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    validated_at?: Date | string;

    @Field(() => String, {nullable:true})
    project_activity_id?: string;
}
