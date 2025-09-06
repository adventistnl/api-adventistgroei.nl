import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyActivityWhereUniqueInput } from './subsidy-activity-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyActivityCreateWithoutSubsidy_receiptsInput } from './subsidy-activity-create-without-subsidy-receipts.input';

@InputType()
export class SubsidyActivityCreateOrConnectWithoutSubsidy_receiptsInput {

    @Field(() => SubsidyActivityWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyActivityWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyActivityWhereUniqueInput, 'id'>;

    @Field(() => SubsidyActivityCreateWithoutSubsidy_receiptsInput, {nullable:false})
    @Type(() => SubsidyActivityCreateWithoutSubsidy_receiptsInput)
    create!: SubsidyActivityCreateWithoutSubsidy_receiptsInput;
}
