import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyReceiptScalarWhereInput } from './subsidy-receipt-scalar-where.input';
import { Type } from 'class-transformer';
import { SubsidyReceiptUpdateManyMutationInput } from './subsidy-receipt-update-many-mutation.input';

@InputType()
export class SubsidyReceiptUpdateManyWithWhereWithoutProject_activityInput {

    @Field(() => SubsidyReceiptScalarWhereInput, {nullable:false})
    @Type(() => SubsidyReceiptScalarWhereInput)
    where!: SubsidyReceiptScalarWhereInput;

    @Field(() => SubsidyReceiptUpdateManyMutationInput, {nullable:false})
    @Type(() => SubsidyReceiptUpdateManyMutationInput)
    data!: SubsidyReceiptUpdateManyMutationInput;
}
