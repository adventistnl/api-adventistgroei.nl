import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyRequestItemWhereUniqueInput } from './subsidy-request-item-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyRequestItemCreateWithoutSubsidy_receiptsInput } from './subsidy-request-item-create-without-subsidy-receipts.input';

@InputType()
export class SubsidyRequestItemCreateOrConnectWithoutSubsidy_receiptsInput {

    @Field(() => SubsidyRequestItemWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyRequestItemWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyRequestItemWhereUniqueInput, 'id'>;

    @Field(() => SubsidyRequestItemCreateWithoutSubsidy_receiptsInput, {nullable:false})
    @Type(() => SubsidyRequestItemCreateWithoutSubsidy_receiptsInput)
    create!: SubsidyRequestItemCreateWithoutSubsidy_receiptsInput;
}
