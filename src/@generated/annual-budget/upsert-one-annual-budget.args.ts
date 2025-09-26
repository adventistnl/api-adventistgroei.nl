import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateInput } from './annual-budget-create.input';
import { AnnualBudgetUpdateInput } from './annual-budget-update.input';

@ArgsType()
export class UpsertOneAnnualBudgetArgs {

    @Field(() => AnnualBudgetWhereUniqueInput, {nullable:false})
    @Type(() => AnnualBudgetWhereUniqueInput)
    where!: Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>;

    @Field(() => AnnualBudgetCreateInput, {nullable:false})
    @Type(() => AnnualBudgetCreateInput)
    create!: AnnualBudgetCreateInput;

    @Field(() => AnnualBudgetUpdateInput, {nullable:false})
    @Type(() => AnnualBudgetUpdateInput)
    update!: AnnualBudgetUpdateInput;
}
