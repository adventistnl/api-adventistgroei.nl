import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyActivityCreateWithoutSubsidy_receiptsInput } from './subsidy-activity-create-without-subsidy-receipts.input';
import { Type } from 'class-transformer';
import { SubsidyActivityCreateOrConnectWithoutSubsidy_receiptsInput } from './subsidy-activity-create-or-connect-without-subsidy-receipts.input';
import { Prisma } from '@prisma/client';
import { SubsidyActivityWhereUniqueInput } from './subsidy-activity-where-unique.input';

@InputType()
export class SubsidyActivityCreateNestedOneWithoutSubsidy_receiptsInput {

    @Field(() => SubsidyActivityCreateWithoutSubsidy_receiptsInput, {nullable:true})
    @Type(() => SubsidyActivityCreateWithoutSubsidy_receiptsInput)
    create?: SubsidyActivityCreateWithoutSubsidy_receiptsInput;

    @Field(() => SubsidyActivityCreateOrConnectWithoutSubsidy_receiptsInput, {nullable:true})
    @Type(() => SubsidyActivityCreateOrConnectWithoutSubsidy_receiptsInput)
    connectOrCreate?: SubsidyActivityCreateOrConnectWithoutSubsidy_receiptsInput;

    @Field(() => SubsidyActivityWhereUniqueInput, {nullable:true})
    @Type(() => SubsidyActivityWhereUniqueInput)
    connect?: Prisma.AtLeast<SubsidyActivityWhereUniqueInput, 'id'>;
}
