import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetCategory } from './annual-budget-category.enum';

@InputType()
export class EnumAnnualBudgetCategoryFieldUpdateOperationsInput {

    @Field(() => AnnualBudgetCategory, {nullable:true})
    set?: `${AnnualBudgetCategory}`;
}
