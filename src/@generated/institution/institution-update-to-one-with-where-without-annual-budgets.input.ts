import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionWhereInput } from './institution-where.input';
import { Type } from 'class-transformer';
import { InstitutionUpdateWithoutAnnual_budgetsInput } from './institution-update-without-annual-budgets.input';

@InputType()
export class InstitutionUpdateToOneWithWhereWithoutAnnual_budgetsInput {

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;

    @Field(() => InstitutionUpdateWithoutAnnual_budgetsInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutAnnual_budgetsInput)
    data!: InstitutionUpdateWithoutAnnual_budgetsInput;
}
