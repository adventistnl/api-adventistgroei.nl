import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyRequestItemWhereInput } from './subsidy-request-item-where.input';
import { Type } from 'class-transformer';
import { SubsidyRequestItemOrderByWithRelationInput } from './subsidy-request-item-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SubsidyRequestItemWhereUniqueInput } from './subsidy-request-item-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SubsidyRequestItemScalarFieldEnum } from './subsidy-request-item-scalar-field.enum';

@ArgsType()
export class FindFirstSubsidyRequestItemOrThrowArgs {

    @Field(() => SubsidyRequestItemWhereInput, {nullable:true})
    @Type(() => SubsidyRequestItemWhereInput)
    where?: SubsidyRequestItemWhereInput;

    @Field(() => [SubsidyRequestItemOrderByWithRelationInput], {nullable:true})
    @Type(() => SubsidyRequestItemOrderByWithRelationInput)
    orderBy?: Array<SubsidyRequestItemOrderByWithRelationInput>;

    @Field(() => SubsidyRequestItemWhereUniqueInput, {nullable:true})
    @Type(() => SubsidyRequestItemWhereUniqueInput)
    cursor?: Prisma.AtLeast<SubsidyRequestItemWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SubsidyRequestItemScalarFieldEnum], {nullable:true})
    distinct?: Array<`${SubsidyRequestItemScalarFieldEnum}`>;
}
