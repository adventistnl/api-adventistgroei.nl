import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestWhereInput } from './subsidy-request-where.input';
import { Type } from 'class-transformer';
import { SubsidyRequestUpdateWithoutSubsidy_receiptsInput } from './subsidy-request-update-without-subsidy-receipts.input';

@InputType()
export class SubsidyRequestUpdateToOneWithWhereWithoutSubsidy_receiptsInput {

    @Field(() => SubsidyRequestWhereInput, {nullable:true})
    @Type(() => SubsidyRequestWhereInput)
    where?: SubsidyRequestWhereInput;

    @Field(() => SubsidyRequestUpdateWithoutSubsidy_receiptsInput, {nullable:false})
    @Type(() => SubsidyRequestUpdateWithoutSubsidy_receiptsInput)
    data!: SubsidyRequestUpdateWithoutSubsidy_receiptsInput;
}
