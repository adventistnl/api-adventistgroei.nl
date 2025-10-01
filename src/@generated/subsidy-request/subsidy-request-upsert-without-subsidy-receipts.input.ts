import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestUpdateWithoutSubsidy_receiptsInput } from './subsidy-request-update-without-subsidy-receipts.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateWithoutSubsidy_receiptsInput } from './subsidy-request-create-without-subsidy-receipts.input';
import { SubsidyRequestWhereInput } from './subsidy-request-where.input';

@InputType()
export class SubsidyRequestUpsertWithoutSubsidy_receiptsInput {

    @Field(() => SubsidyRequestUpdateWithoutSubsidy_receiptsInput, {nullable:false})
    @Type(() => SubsidyRequestUpdateWithoutSubsidy_receiptsInput)
    update!: SubsidyRequestUpdateWithoutSubsidy_receiptsInput;

    @Field(() => SubsidyRequestCreateWithoutSubsidy_receiptsInput, {nullable:false})
    @Type(() => SubsidyRequestCreateWithoutSubsidy_receiptsInput)
    create!: SubsidyRequestCreateWithoutSubsidy_receiptsInput;

    @Field(() => SubsidyRequestWhereInput, {nullable:true})
    @Type(() => SubsidyRequestWhereInput)
    where?: SubsidyRequestWhereInput;
}
