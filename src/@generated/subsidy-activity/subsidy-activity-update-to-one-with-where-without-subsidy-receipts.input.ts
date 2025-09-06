import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyActivityWhereInput } from './subsidy-activity-where.input';
import { Type } from 'class-transformer';
import { SubsidyActivityUpdateWithoutSubsidy_receiptsInput } from './subsidy-activity-update-without-subsidy-receipts.input';

@InputType()
export class SubsidyActivityUpdateToOneWithWhereWithoutSubsidy_receiptsInput {

    @Field(() => SubsidyActivityWhereInput, {nullable:true})
    @Type(() => SubsidyActivityWhereInput)
    where?: SubsidyActivityWhereInput;

    @Field(() => SubsidyActivityUpdateWithoutSubsidy_receiptsInput, {nullable:false})
    @Type(() => SubsidyActivityUpdateWithoutSubsidy_receiptsInput)
    data!: SubsidyActivityUpdateWithoutSubsidy_receiptsInput;
}
