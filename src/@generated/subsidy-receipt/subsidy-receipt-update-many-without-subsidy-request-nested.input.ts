import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyReceiptCreateWithoutSubsidy_requestInput } from './subsidy-receipt-create-without-subsidy-request.input';
import { Type } from 'class-transformer';
import { SubsidyReceiptCreateOrConnectWithoutSubsidy_requestInput } from './subsidy-receipt-create-or-connect-without-subsidy-request.input';
import { SubsidyReceiptUpsertWithWhereUniqueWithoutSubsidy_requestInput } from './subsidy-receipt-upsert-with-where-unique-without-subsidy-request.input';
import { SubsidyReceiptCreateManySubsidy_requestInputEnvelope } from './subsidy-receipt-create-many-subsidy-request-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyReceiptWhereUniqueInput } from './subsidy-receipt-where-unique.input';
import { SubsidyReceiptUpdateWithWhereUniqueWithoutSubsidy_requestInput } from './subsidy-receipt-update-with-where-unique-without-subsidy-request.input';
import { SubsidyReceiptUpdateManyWithWhereWithoutSubsidy_requestInput } from './subsidy-receipt-update-many-with-where-without-subsidy-request.input';
import { SubsidyReceiptScalarWhereInput } from './subsidy-receipt-scalar-where.input';

@InputType()
export class SubsidyReceiptUpdateManyWithoutSubsidy_requestNestedInput {

    @Field(() => [SubsidyReceiptCreateWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => SubsidyReceiptCreateWithoutSubsidy_requestInput)
    create?: Array<SubsidyReceiptCreateWithoutSubsidy_requestInput>;

    @Field(() => [SubsidyReceiptCreateOrConnectWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => SubsidyReceiptCreateOrConnectWithoutSubsidy_requestInput)
    connectOrCreate?: Array<SubsidyReceiptCreateOrConnectWithoutSubsidy_requestInput>;

    @Field(() => [SubsidyReceiptUpsertWithWhereUniqueWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => SubsidyReceiptUpsertWithWhereUniqueWithoutSubsidy_requestInput)
    upsert?: Array<SubsidyReceiptUpsertWithWhereUniqueWithoutSubsidy_requestInput>;

    @Field(() => SubsidyReceiptCreateManySubsidy_requestInputEnvelope, {nullable:true})
    @Type(() => SubsidyReceiptCreateManySubsidy_requestInputEnvelope)
    createMany?: SubsidyReceiptCreateManySubsidy_requestInputEnvelope;

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

    @Field(() => [SubsidyReceiptUpdateWithWhereUniqueWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => SubsidyReceiptUpdateWithWhereUniqueWithoutSubsidy_requestInput)
    update?: Array<SubsidyReceiptUpdateWithWhereUniqueWithoutSubsidy_requestInput>;

    @Field(() => [SubsidyReceiptUpdateManyWithWhereWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => SubsidyReceiptUpdateManyWithWhereWithoutSubsidy_requestInput)
    updateMany?: Array<SubsidyReceiptUpdateManyWithWhereWithoutSubsidy_requestInput>;

    @Field(() => [SubsidyReceiptScalarWhereInput], {nullable:true})
    @Type(() => SubsidyReceiptScalarWhereInput)
    deleteMany?: Array<SubsidyReceiptScalarWhereInput>;
}
