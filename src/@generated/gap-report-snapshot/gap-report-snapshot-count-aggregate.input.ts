import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class GapReportSnapshotCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    institution_id?: true;

    @Field(() => Boolean, {nullable:true})
    month?: true;

    @Field(() => Boolean, {nullable:true})
    churches_without_preacher?: true;

    @Field(() => Boolean, {nullable:true})
    preachers_without_assignment?: true;

    @Field(() => Boolean, {nullable:true})
    computed_at?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
