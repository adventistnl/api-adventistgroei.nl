import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnnualBudgetUpdateInput } from './annual-budget-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';

@ArgsType()
export class UpdateOneAnnualBudgetArgs {

    @Field(() => AnnualBudgetUpdateInput, {nullable:false})
    @Type(() => AnnualBudgetUpdateInput)
    data!: AnnualBudgetUpdateInput;

    @Field(() => AnnualBudgetWhereUniqueInput, {nullable:false})
    @Type(() => AnnualBudgetWhereUniqueInput)
    where!: Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>;
}
