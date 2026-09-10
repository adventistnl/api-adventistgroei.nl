import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class GapReportSnapshotUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:false})
    month!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    churches_without_preacher!: any;

    @Field(() => GraphQLJSON, {nullable:false})
    preachers_without_assignment!: any;

    @Field(() => Date, {nullable:true})
    computed_at?: Date | string;
}
