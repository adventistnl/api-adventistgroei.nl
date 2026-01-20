import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestItemUpdateWithoutSubsidy_receiptsInput } from './subsidy-request-item-update-without-subsidy-receipts.input';
import { Type } from 'class-transformer';
import { SubsidyRequestItemCreateWithoutSubsidy_receiptsInput } from './subsidy-request-item-create-without-subsidy-receipts.input';
import { SubsidyRequestItemWhereInput } from './subsidy-request-item-where.input';

@InputType()
export class SubsidyRequestItemUpsertWithoutSubsidy_receiptsInput {

    @Field(() => SubsidyRequestItemUpdateWithoutSubsidy_receiptsInput, {nullable:false})
    @Type(() => SubsidyRequestItemUpdateWithoutSubsidy_receiptsInput)
    update!: SubsidyRequestItemUpdateWithoutSubsidy_receiptsInput;

    @Field(() => SubsidyRequestItemCreateWithoutSubsidy_receiptsInput, {nullable:false})
    @Type(() => SubsidyRequestItemCreateWithoutSubsidy_receiptsInput)
    create!: SubsidyRequestItemCreateWithoutSubsidy_receiptsInput;

    @Field(() => SubsidyRequestItemWhereInput, {nullable:true})
    @Type(() => SubsidyRequestItemWhereInput)
    where?: SubsidyRequestItemWhereInput;
}
