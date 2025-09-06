import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyActivityCreateWithoutSubsidy_receiptsInput } from './subsidy-activity-create-without-subsidy-receipts.input';
import { Type } from 'class-transformer';
import { SubsidyActivityCreateOrConnectWithoutSubsidy_receiptsInput } from './subsidy-activity-create-or-connect-without-subsidy-receipts.input';
import { SubsidyActivityUpsertWithoutSubsidy_receiptsInput } from './subsidy-activity-upsert-without-subsidy-receipts.input';
import { Prisma } from '@prisma/client';
import { SubsidyActivityWhereUniqueInput } from './subsidy-activity-where-unique.input';
import { SubsidyActivityUpdateToOneWithWhereWithoutSubsidy_receiptsInput } from './subsidy-activity-update-to-one-with-where-without-subsidy-receipts.input';

@InputType()
export class SubsidyActivityUpdateOneRequiredWithoutSubsidy_receiptsNestedInput {

    @Field(() => SubsidyActivityCreateWithoutSubsidy_receiptsInput, {nullable:true})
    @Type(() => SubsidyActivityCreateWithoutSubsidy_receiptsInput)
    create?: SubsidyActivityCreateWithoutSubsidy_receiptsInput;

    @Field(() => SubsidyActivityCreateOrConnectWithoutSubsidy_receiptsInput, {nullable:true})
    @Type(() => SubsidyActivityCreateOrConnectWithoutSubsidy_receiptsInput)
    connectOrCreate?: SubsidyActivityCreateOrConnectWithoutSubsidy_receiptsInput;

    @Field(() => SubsidyActivityUpsertWithoutSubsidy_receiptsInput, {nullable:true})
    @Type(() => SubsidyActivityUpsertWithoutSubsidy_receiptsInput)
    upsert?: SubsidyActivityUpsertWithoutSubsidy_receiptsInput;

    @Field(() => SubsidyActivityWhereUniqueInput, {nullable:true})
    @Type(() => SubsidyActivityWhereUniqueInput)
    connect?: Prisma.AtLeast<SubsidyActivityWhereUniqueInput, 'id'>;

    @Field(() => SubsidyActivityUpdateToOneWithWhereWithoutSubsidy_receiptsInput, {nullable:true})
    @Type(() => SubsidyActivityUpdateToOneWithWhereWithoutSubsidy_receiptsInput)
    update?: SubsidyActivityUpdateToOneWithWhereWithoutSubsidy_receiptsInput;
}
