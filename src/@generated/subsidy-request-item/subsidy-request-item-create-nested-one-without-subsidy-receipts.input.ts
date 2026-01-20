import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestItemCreateWithoutSubsidy_receiptsInput } from './subsidy-request-item-create-without-subsidy-receipts.input';
import { Type } from 'class-transformer';
import { SubsidyRequestItemCreateOrConnectWithoutSubsidy_receiptsInput } from './subsidy-request-item-create-or-connect-without-subsidy-receipts.input';
import { Prisma } from '@prisma/client';
import { SubsidyRequestItemWhereUniqueInput } from './subsidy-request-item-where-unique.input';

@InputType()
export class SubsidyRequestItemCreateNestedOneWithoutSubsidy_receiptsInput {

    @Field(() => SubsidyRequestItemCreateWithoutSubsidy_receiptsInput, {nullable:true})
    @Type(() => SubsidyRequestItemCreateWithoutSubsidy_receiptsInput)
    create?: SubsidyRequestItemCreateWithoutSubsidy_receiptsInput;

    @Field(() => SubsidyRequestItemCreateOrConnectWithoutSubsidy_receiptsInput, {nullable:true})
    @Type(() => SubsidyRequestItemCreateOrConnectWithoutSubsidy_receiptsInput)
    connectOrCreate?: SubsidyRequestItemCreateOrConnectWithoutSubsidy_receiptsInput;

    @Field(() => SubsidyRequestItemWhereUniqueInput, {nullable:true})
    @Type(() => SubsidyRequestItemWhereUniqueInput)
    connect?: Prisma.AtLeast<SubsidyRequestItemWhereUniqueInput, 'id'>;
}
