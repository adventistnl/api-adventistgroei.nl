import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetEntityType } from './annual-budget-entity-type.enum';

@InputType()
export class EnumAnnualBudgetEntityTypeFieldUpdateOperationsInput {

    @Field(() => AnnualBudgetEntityType, {nullable:true})
    set?: `${AnnualBudgetEntityType}`;
}
