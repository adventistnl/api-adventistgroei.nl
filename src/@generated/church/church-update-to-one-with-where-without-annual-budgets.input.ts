import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchWhereInput } from './church-where.input';
import { Type } from 'class-transformer';
import { ChurchUpdateWithoutAnnual_budgetsInput } from './church-update-without-annual-budgets.input';

@InputType()
export class ChurchUpdateToOneWithWhereWithoutAnnual_budgetsInput {

    @Field(() => ChurchWhereInput, {nullable:true})
    @Type(() => ChurchWhereInput)
    where?: ChurchWhereInput;

    @Field(() => ChurchUpdateWithoutAnnual_budgetsInput, {nullable:false})
    @Type(() => ChurchUpdateWithoutAnnual_budgetsInput)
    data!: ChurchUpdateWithoutAnnual_budgetsInput;
}
