import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class GapReportSnapshotInstitution_idMonthCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:false})
    month!: string;
}
