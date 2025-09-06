import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyReceiptWhereInput } from './subsidy-receipt-where.input';
import { Type } from 'class-transformer';
import { SubsidyReceiptOrderByWithRelationInput } from './subsidy-receipt-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SubsidyReceiptWhereUniqueInput } from './subsidy-receipt-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SubsidyReceiptScalarFieldEnum } from './subsidy-receipt-scalar-field.enum';

@ArgsType()
export class FindFirstSubsidyReceiptArgs {

    @Field(() => SubsidyReceiptWhereInput, {nullable:true})
    @Type(() => SubsidyReceiptWhereInput)
    where?: SubsidyReceiptWhereInput;

    @Field(() => [SubsidyReceiptOrderByWithRelationInput], {nullable:true})
    @Type(() => SubsidyReceiptOrderByWithRelationInput)
    orderBy?: Array<SubsidyReceiptOrderByWithRelationInput>;

    @Field(() => SubsidyReceiptWhereUniqueInput, {nullable:true})
    @Type(() => SubsidyReceiptWhereUniqueInput)
    cursor?: Prisma.AtLeast<SubsidyReceiptWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SubsidyReceiptScalarFieldEnum], {nullable:true})
    distinct?: Array<`${SubsidyReceiptScalarFieldEnum}`>;
}
