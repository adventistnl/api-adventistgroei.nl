import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestItemCreateWithoutSubsidy_receiptsInput } from './subsidy-request-item-create-without-subsidy-receipts.input';
import { Type } from 'class-transformer';
import { SubsidyRequestItemCreateOrConnectWithoutSubsidy_receiptsInput } from './subsidy-request-item-create-or-connect-without-subsidy-receipts.input';
import { SubsidyRequestItemUpsertWithoutSubsidy_receiptsInput } from './subsidy-request-item-upsert-without-subsidy-receipts.input';
import { SubsidyRequestItemWhereInput } from './subsidy-request-item-where.input';
import { Prisma } from '@prisma/client';
import { SubsidyRequestItemWhereUniqueInput } from './subsidy-request-item-where-unique.input';
import { SubsidyRequestItemUpdateToOneWithWhereWithoutSubsidy_receiptsInput } from './subsidy-request-item-update-to-one-with-where-without-subsidy-receipts.input';

@InputType()
export class SubsidyRequestItemUpdateOneWithoutSubsidy_receiptsNestedInput {

    @Field(() => SubsidyRequestItemCreateWithoutSubsidy_receiptsInput, {nullable:true})
    @Type(() => SubsidyRequestItemCreateWithoutSubsidy_receiptsInput)
    create?: SubsidyRequestItemCreateWithoutSubsidy_receiptsInput;

    @Field(() => SubsidyRequestItemCreateOrConnectWithoutSubsidy_receiptsInput, {nullable:true})
    @Type(() => SubsidyRequestItemCreateOrConnectWithoutSubsidy_receiptsInput)
    connectOrCreate?: SubsidyRequestItemCreateOrConnectWithoutSubsidy_receiptsInput;

    @Field(() => SubsidyRequestItemUpsertWithoutSubsidy_receiptsInput, {nullable:true})
    @Type(() => SubsidyRequestItemUpsertWithoutSubsidy_receiptsInput)
    upsert?: SubsidyRequestItemUpsertWithoutSubsidy_receiptsInput;

    @Field(() => SubsidyRequestItemWhereInput, {nullable:true})
    @Type(() => SubsidyRequestItemWhereInput)
    disconnect?: SubsidyRequestItemWhereInput;

    @Field(() => SubsidyRequestItemWhereInput, {nullable:true})
    @Type(() => SubsidyRequestItemWhereInput)
    delete?: SubsidyRequestItemWhereInput;

    @Field(() => SubsidyRequestItemWhereUniqueInput, {nullable:true})
    @Type(() => SubsidyRequestItemWhereUniqueInput)
    connect?: Prisma.AtLeast<SubsidyRequestItemWhereUniqueInput, 'id'>;

    @Field(() => SubsidyRequestItemUpdateToOneWithWhereWithoutSubsidy_receiptsInput, {nullable:true})
    @Type(() => SubsidyRequestItemUpdateToOneWithWhereWithoutSubsidy_receiptsInput)
    update?: SubsidyRequestItemUpdateToOneWithWhereWithoutSubsidy_receiptsInput;
}
