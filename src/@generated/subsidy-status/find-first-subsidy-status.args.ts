import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyStatusWhereInput } from './subsidy-status-where.input';
import { Type } from 'class-transformer';
import { SubsidyStatusOrderByWithRelationInput } from './subsidy-status-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SubsidyStatusWhereUniqueInput } from './subsidy-status-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SubsidyStatusScalarFieldEnum } from './subsidy-status-scalar-field.enum';

@ArgsType()
export class FindFirstSubsidyStatusArgs {

    @Field(() => SubsidyStatusWhereInput, {nullable:true})
    @Type(() => SubsidyStatusWhereInput)
    where?: SubsidyStatusWhereInput;

    @Field(() => [SubsidyStatusOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SubsidyStatusOrderByWithRelationInput>;

    @Field(() => SubsidyStatusWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SubsidyStatusWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SubsidyStatusScalarFieldEnum], {nullable:true})
    distinct?: Array<`${SubsidyStatusScalarFieldEnum}`>;
}
