import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestCreateWithoutSubsidy_receiptsInput } from './subsidy-request-create-without-subsidy-receipts.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateOrConnectWithoutSubsidy_receiptsInput } from './subsidy-request-create-or-connect-without-subsidy-receipts.input';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';

@InputType()
export class SubsidyRequestCreateNestedOneWithoutSubsidy_receiptsInput {

    @Field(() => SubsidyRequestCreateWithoutSubsidy_receiptsInput, {nullable:true})
    @Type(() => SubsidyRequestCreateWithoutSubsidy_receiptsInput)
    create?: SubsidyRequestCreateWithoutSubsidy_receiptsInput;

    @Field(() => SubsidyRequestCreateOrConnectWithoutSubsidy_receiptsInput, {nullable:true})
    @Type(() => SubsidyRequestCreateOrConnectWithoutSubsidy_receiptsInput)
    connectOrCreate?: SubsidyRequestCreateOrConnectWithoutSubsidy_receiptsInput;

    @Field(() => SubsidyRequestWhereUniqueInput, {nullable:true})
    @Type(() => SubsidyRequestWhereUniqueInput)
    connect?: Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>;
}
