import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyReceiptCreateWithoutSubsidy_requestInput } from './subsidy-receipt-create-without-subsidy-request.input';
import { Type } from 'class-transformer';
import { SubsidyReceiptCreateOrConnectWithoutSubsidy_requestInput } from './subsidy-receipt-create-or-connect-without-subsidy-request.input';
import { SubsidyReceiptCreateManySubsidy_requestInputEnvelope } from './subsidy-receipt-create-many-subsidy-request-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyReceiptWhereUniqueInput } from './subsidy-receipt-where-unique.input';

@InputType()
export class SubsidyReceiptUncheckedCreateNestedManyWithoutSubsidy_requestInput {

    @Field(() => [SubsidyReceiptCreateWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => SubsidyReceiptCreateWithoutSubsidy_requestInput)
    create?: Array<SubsidyReceiptCreateWithoutSubsidy_requestInput>;

    @Field(() => [SubsidyReceiptCreateOrConnectWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => SubsidyReceiptCreateOrConnectWithoutSubsidy_requestInput)
    connectOrCreate?: Array<SubsidyReceiptCreateOrConnectWithoutSubsidy_requestInput>;

    @Field(() => SubsidyReceiptCreateManySubsidy_requestInputEnvelope, {nullable:true})
    @Type(() => SubsidyReceiptCreateManySubsidy_requestInputEnvelope)
    createMany?: SubsidyReceiptCreateManySubsidy_requestInputEnvelope;

    @Field(() => [SubsidyReceiptWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyReceiptWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubsidyReceiptWhereUniqueInput, 'id'>>;
}
