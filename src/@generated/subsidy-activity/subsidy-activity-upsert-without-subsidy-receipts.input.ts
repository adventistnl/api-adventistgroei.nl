import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyActivityUpdateWithoutSubsidy_receiptsInput } from './subsidy-activity-update-without-subsidy-receipts.input';
import { Type } from 'class-transformer';
import { SubsidyActivityCreateWithoutSubsidy_receiptsInput } from './subsidy-activity-create-without-subsidy-receipts.input';
import { SubsidyActivityWhereInput } from './subsidy-activity-where.input';

@InputType()
export class SubsidyActivityUpsertWithoutSubsidy_receiptsInput {

    @Field(() => SubsidyActivityUpdateWithoutSubsidy_receiptsInput, {nullable:false})
    @Type(() => SubsidyActivityUpdateWithoutSubsidy_receiptsInput)
    update!: SubsidyActivityUpdateWithoutSubsidy_receiptsInput;

    @Field(() => SubsidyActivityCreateWithoutSubsidy_receiptsInput, {nullable:false})
    @Type(() => SubsidyActivityCreateWithoutSubsidy_receiptsInput)
    create!: SubsidyActivityCreateWithoutSubsidy_receiptsInput;

    @Field(() => SubsidyActivityWhereInput, {nullable:true})
    @Type(() => SubsidyActivityWhereInput)
    where?: SubsidyActivityWhereInput;
}
