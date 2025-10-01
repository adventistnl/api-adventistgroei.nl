import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyReceiptWhereUniqueInput } from './subsidy-receipt-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyReceiptUpdateWithoutSubsidy_requestInput } from './subsidy-receipt-update-without-subsidy-request.input';
import { SubsidyReceiptCreateWithoutSubsidy_requestInput } from './subsidy-receipt-create-without-subsidy-request.input';

@InputType()
export class SubsidyReceiptUpsertWithWhereUniqueWithoutSubsidy_requestInput {

    @Field(() => SubsidyReceiptWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyReceiptWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyReceiptWhereUniqueInput, 'id'>;

    @Field(() => SubsidyReceiptUpdateWithoutSubsidy_requestInput, {nullable:false})
    @Type(() => SubsidyReceiptUpdateWithoutSubsidy_requestInput)
    update!: SubsidyReceiptUpdateWithoutSubsidy_requestInput;

    @Field(() => SubsidyReceiptCreateWithoutSubsidy_requestInput, {nullable:false})
    @Type(() => SubsidyReceiptCreateWithoutSubsidy_requestInput)
    create!: SubsidyReceiptCreateWithoutSubsidy_requestInput;
}
