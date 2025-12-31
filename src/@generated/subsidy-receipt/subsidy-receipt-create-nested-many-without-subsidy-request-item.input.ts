import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyReceiptCreateWithoutSubsidy_request_itemInput } from './subsidy-receipt-create-without-subsidy-request-item.input';
import { Type } from 'class-transformer';
import { SubsidyReceiptCreateOrConnectWithoutSubsidy_request_itemInput } from './subsidy-receipt-create-or-connect-without-subsidy-request-item.input';
import { SubsidyReceiptCreateManySubsidy_request_itemInputEnvelope } from './subsidy-receipt-create-many-subsidy-request-item-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyReceiptWhereUniqueInput } from './subsidy-receipt-where-unique.input';

@InputType()
export class SubsidyReceiptCreateNestedManyWithoutSubsidy_request_itemInput {

    @Field(() => [SubsidyReceiptCreateWithoutSubsidy_request_itemInput], {nullable:true})
    @Type(() => SubsidyReceiptCreateWithoutSubsidy_request_itemInput)
    create?: Array<SubsidyReceiptCreateWithoutSubsidy_request_itemInput>;

    @Field(() => [SubsidyReceiptCreateOrConnectWithoutSubsidy_request_itemInput], {nullable:true})
    @Type(() => SubsidyReceiptCreateOrConnectWithoutSubsidy_request_itemInput)
    connectOrCreate?: Array<SubsidyReceiptCreateOrConnectWithoutSubsidy_request_itemInput>;

    @Field(() => SubsidyReceiptCreateManySubsidy_request_itemInputEnvelope, {nullable:true})
    @Type(() => SubsidyReceiptCreateManySubsidy_request_itemInputEnvelope)
    createMany?: SubsidyReceiptCreateManySubsidy_request_itemInputEnvelope;

    @Field(() => [SubsidyReceiptWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyReceiptWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubsidyReceiptWhereUniqueInput, 'id'>>;
}
