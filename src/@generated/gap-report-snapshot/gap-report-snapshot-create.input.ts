import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { InstitutionCreateNestedOneWithoutGap_report_snapshotsInput } from '../institution/institution-create-nested-one-without-gap-report-snapshots.input';
import { Type } from 'class-transformer';

@InputType()
export class GapReportSnapshotCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    month!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    churches_without_preacher!: any;

    @Field(() => GraphQLJSON, {nullable:false})
    preachers_without_assignment!: any;

    @Field(() => Date, {nullable:true})
    computed_at?: Date | string;

    @Field(() => InstitutionCreateNestedOneWithoutGap_report_snapshotsInput, {nullable:false})
    @Type(() => InstitutionCreateNestedOneWithoutGap_report_snapshotsInput)
    institution!: InstitutionCreateNestedOneWithoutGap_report_snapshotsInput;
}
