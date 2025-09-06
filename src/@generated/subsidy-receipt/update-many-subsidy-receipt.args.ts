import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyReceiptUpdateManyMutationInput } from './subsidy-receipt-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SubsidyReceiptWhereInput } from './subsidy-receipt-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManySubsidyReceiptArgs {

    @Field(() => SubsidyReceiptUpdateManyMutationInput, {nullable:false})
    @Type(() => SubsidyReceiptUpdateManyMutationInput)
    data!: SubsidyReceiptUpdateManyMutationInput;

    @Field(() => SubsidyReceiptWhereInput, {nullable:true})
    @Type(() => SubsidyReceiptWhereInput)
    where?: SubsidyReceiptWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
