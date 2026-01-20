import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestCreateWithoutSubsidy_receiptsInput } from './subsidy-request-create-without-subsidy-receipts.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateOrConnectWithoutSubsidy_receiptsInput } from './subsidy-request-create-or-connect-without-subsidy-receipts.input';
import { SubsidyRequestUpsertWithoutSubsidy_receiptsInput } from './subsidy-request-upsert-without-subsidy-receipts.input';
import { SubsidyRequestWhereInput } from './subsidy-request-where.input';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';
import { SubsidyRequestUpdateToOneWithWhereWithoutSubsidy_receiptsInput } from './subsidy-request-update-to-one-with-where-without-subsidy-receipts.input';

@InputType()
export class SubsidyRequestUpdateOneWithoutSubsidy_receiptsNestedInput {

    @Field(() => SubsidyRequestCreateWithoutSubsidy_receiptsInput, {nullable:true})
    @Type(() => SubsidyRequestCreateWithoutSubsidy_receiptsInput)
    create?: SubsidyRequestCreateWithoutSubsidy_receiptsInput;

    @Field(() => SubsidyRequestCreateOrConnectWithoutSubsidy_receiptsInput, {nullable:true})
    @Type(() => SubsidyRequestCreateOrConnectWithoutSubsidy_receiptsInput)
    connectOrCreate?: SubsidyRequestCreateOrConnectWithoutSubsidy_receiptsInput;

    @Field(() => SubsidyRequestUpsertWithoutSubsidy_receiptsInput, {nullable:true})
    @Type(() => SubsidyRequestUpsertWithoutSubsidy_receiptsInput)
    upsert?: SubsidyRequestUpsertWithoutSubsidy_receiptsInput;

    @Field(() => SubsidyRequestWhereInput, {nullable:true})
    @Type(() => SubsidyRequestWhereInput)
    disconnect?: SubsidyRequestWhereInput;

    @Field(() => SubsidyRequestWhereInput, {nullable:true})
    @Type(() => SubsidyRequestWhereInput)
    delete?: SubsidyRequestWhereInput;

    @Field(() => SubsidyRequestWhereUniqueInput, {nullable:true})
    @Type(() => SubsidyRequestWhereUniqueInput)
    connect?: Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>;

    @Field(() => SubsidyRequestUpdateToOneWithWhereWithoutSubsidy_receiptsInput, {nullable:true})
    @Type(() => SubsidyRequestUpdateToOneWithWhereWithoutSubsidy_receiptsInput)
    update?: SubsidyRequestUpdateToOneWithWhereWithoutSubsidy_receiptsInput;
}
