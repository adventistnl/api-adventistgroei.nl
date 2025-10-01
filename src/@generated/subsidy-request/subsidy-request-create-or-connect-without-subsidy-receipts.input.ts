import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateWithoutSubsidy_receiptsInput } from './subsidy-request-create-without-subsidy-receipts.input';

@InputType()
export class SubsidyRequestCreateOrConnectWithoutSubsidy_receiptsInput {

    @Field(() => SubsidyRequestWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyRequestWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>;

    @Field(() => SubsidyRequestCreateWithoutSubsidy_receiptsInput, {nullable:false})
    @Type(() => SubsidyRequestCreateWithoutSubsidy_receiptsInput)
    create!: SubsidyRequestCreateWithoutSubsidy_receiptsInput;
}
