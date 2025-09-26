import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnnualBudgetWhereInput } from './annual-budget-where.input';
import { Type } from 'class-transformer';
import { AnnualBudgetOrderByWithRelationInput } from './annual-budget-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AnnualBudgetScalarFieldEnum } from './annual-budget-scalar-field.enum';

@ArgsType()
export class FindManyAnnualBudgetArgs {

    @Field(() => AnnualBudgetWhereInput, {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    where?: AnnualBudgetWhereInput;

    @Field(() => [AnnualBudgetOrderByWithRelationInput], {nullable:true})
    @Type(() => AnnualBudgetOrderByWithRelationInput)
    orderBy?: Array<AnnualBudgetOrderByWithRelationInput>;

    @Field(() => AnnualBudgetWhereUniqueInput, {nullable:true})
    @Type(() => AnnualBudgetWhereUniqueInput)
    cursor?: Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AnnualBudgetScalarFieldEnum], {nullable:true})
    distinct?: Array<`${AnnualBudgetScalarFieldEnum}`>;
}
