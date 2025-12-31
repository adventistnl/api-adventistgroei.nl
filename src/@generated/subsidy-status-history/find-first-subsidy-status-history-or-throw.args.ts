import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyStatusHistoryWhereInput } from './subsidy-status-history-where.input';
import { Type } from 'class-transformer';
import { SubsidyStatusHistoryOrderByWithRelationInput } from './subsidy-status-history-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SubsidyStatusHistoryWhereUniqueInput } from './subsidy-status-history-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SubsidyStatusHistoryScalarFieldEnum } from './subsidy-status-history-scalar-field.enum';

@ArgsType()
export class FindFirstSubsidyStatusHistoryOrThrowArgs {

    @Field(() => SubsidyStatusHistoryWhereInput, {nullable:true})
    @Type(() => SubsidyStatusHistoryWhereInput)
    where?: SubsidyStatusHistoryWhereInput;

    @Field(() => [SubsidyStatusHistoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SubsidyStatusHistoryOrderByWithRelationInput>;

    @Field(() => SubsidyStatusHistoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SubsidyStatusHistoryWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SubsidyStatusHistoryScalarFieldEnum], {nullable:true})
    distinct?: Array<`${SubsidyStatusHistoryScalarFieldEnum}`>;
}
