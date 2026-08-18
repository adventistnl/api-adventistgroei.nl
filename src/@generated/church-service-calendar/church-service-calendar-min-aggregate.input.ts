import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ChurchServiceCalendarMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    institution_id?: true;

    @Field(() => Boolean, {nullable:true})
    church_id?: true;

    @Field(() => Boolean, {nullable:true})
    date?: true;

    @Field(() => Boolean, {nullable:true})
    has_service?: true;

    @Field(() => Boolean, {nullable:true})
    source?: true;

    @Field(() => Boolean, {nullable:true})
    created_at?: true;

    @Field(() => Boolean, {nullable:true})
    updated_at?: true;

    @Field(() => Boolean, {nullable:true})
    created_by?: true;

    @Field(() => Boolean, {nullable:true})
    updated_by?: true;
}
