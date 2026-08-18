import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GapReportSnapshotMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    institution_id?: string;

    @Field(() => String, {nullable:true})
    month?: string;

    @Field(() => Date, {nullable:true})
    computed_at?: Date | string;
}
