import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestItemWhereInput } from './subsidy-request-item-where.input';
import { Type } from 'class-transformer';
import { SubsidyRequestItemUpdateWithoutSubsidy_receiptsInput } from './subsidy-request-item-update-without-subsidy-receipts.input';

@InputType()
export class SubsidyRequestItemUpdateToOneWithWhereWithoutSubsidy_receiptsInput {

    @Field(() => SubsidyRequestItemWhereInput, {nullable:true})
    @Type(() => SubsidyRequestItemWhereInput)
    where?: SubsidyRequestItemWhereInput;

    @Field(() => SubsidyRequestItemUpdateWithoutSubsidy_receiptsInput, {nullable:false})
    @Type(() => SubsidyRequestItemUpdateWithoutSubsidy_receiptsInput)
    data!: SubsidyRequestItemUpdateWithoutSubsidy_receiptsInput;
}
