import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyReceiptCreateWithoutSubsidy_request_itemInput } from './subsidy-receipt-create-without-subsidy-request-item.input';
import { Type } from 'class-transformer';
import { SubsidyReceiptCreateOrConnectWithoutSubsidy_request_itemInput } from './subsidy-receipt-create-or-connect-without-subsidy-request-item.input';
import { SubsidyReceiptUpsertWithWhereUniqueWithoutSubsidy_request_itemInput } from './subsidy-receipt-upsert-with-where-unique-without-subsidy-request-item.input';
import { SubsidyReceiptCreateManySubsidy_request_itemInputEnvelope } from './subsidy-receipt-create-many-subsidy-request-item-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyReceiptWhereUniqueInput } from './subsidy-receipt-where-unique.input';
import { SubsidyReceiptUpdateWithWhereUniqueWithoutSubsidy_request_itemInput } from './subsidy-receipt-update-with-where-unique-without-subsidy-request-item.input';
import { SubsidyReceiptUpdateManyWithWhereWithoutSubsidy_request_itemInput } from './subsidy-receipt-update-many-with-where-without-subsidy-request-item.input';
import { SubsidyReceiptScalarWhereInput } from './subsidy-receipt-scalar-where.input';

@InputType()
export class SubsidyReceiptUpdateManyWithoutSubsidy_request_itemNestedInput {

    @Field(() => [SubsidyReceiptCreateWithoutSubsidy_request_itemInput], {nullable:true})
    @Type(() => SubsidyReceiptCreateWithoutSubsidy_request_itemInput)
    create?: Array<SubsidyReceiptCreateWithoutSubsidy_request_itemInput>;

    @Field(() => [SubsidyReceiptCreateOrConnectWithoutSubsidy_request_itemInput], {nullable:true})
    @Type(() => SubsidyReceiptCreateOrConnectWithoutSubsidy_request_itemInput)
    connectOrCreate?: Array<SubsidyReceiptCreateOrConnectWithoutSubsidy_request_itemInput>;

    @Field(() => [SubsidyReceiptUpsertWithWhereUniqueWithoutSubsidy_request_itemInput], {nullable:true})
    @Type(() => SubsidyReceiptUpsertWithWhereUniqueWithoutSubsidy_request_itemInput)
    upsert?: Array<SubsidyReceiptUpsertWithWhereUniqueWithoutSubsidy_request_itemInput>;

    @Field(() => SubsidyReceiptCreateManySubsidy_request_itemInputEnvelope, {nullable:true})
    @Type(() => SubsidyReceiptCreateManySubsidy_request_itemInputEnvelope)
    createMany?: SubsidyReceiptCreateManySubsidy_request_itemInputEnvelope;

    @Field(() => [SubsidyReceiptWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyReceiptWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SubsidyReceiptWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyReceiptWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyReceiptWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SubsidyReceiptWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyReceiptWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyReceiptWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SubsidyReceiptWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyReceiptWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyReceiptWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubsidyReceiptWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyReceiptUpdateWithWhereUniqueWithoutSubsidy_request_itemInput], {nullable:true})
    @Type(() => SubsidyReceiptUpdateWithWhereUniqueWithoutSubsidy_request_itemInput)
    update?: Array<SubsidyReceiptUpdateWithWhereUniqueWithoutSubsidy_request_itemInput>;

    @Field(() => [SubsidyReceiptUpdateManyWithWhereWithoutSubsidy_request_itemInput], {nullable:true})
    @Type(() => SubsidyReceiptUpdateManyWithWhereWithoutSubsidy_request_itemInput)
    updateMany?: Array<SubsidyReceiptUpdateManyWithWhereWithoutSubsidy_request_itemInput>;

    @Field(() => [SubsidyReceiptScalarWhereInput], {nullable:true})
    @Type(() => SubsidyReceiptScalarWhereInput)
    deleteMany?: Array<SubsidyReceiptScalarWhereInput>;
}
