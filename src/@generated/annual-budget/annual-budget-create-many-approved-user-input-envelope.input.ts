import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetCreateManyApproved_userInput } from './annual-budget-create-many-approved-user.input';
import { Type } from 'class-transformer';

@InputType()
export class AnnualBudgetCreateManyApproved_userInputEnvelope {

    @Field(() => [AnnualBudgetCreateManyApproved_userInput], {nullable:false})
    @Type(() => AnnualBudgetCreateManyApproved_userInput)
    data!: Array<AnnualBudgetCreateManyApproved_userInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
