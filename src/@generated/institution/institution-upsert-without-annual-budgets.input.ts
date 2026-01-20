import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionUpdateWithoutAnnual_budgetsInput } from './institution-update-without-annual-budgets.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutAnnual_budgetsInput } from './institution-create-without-annual-budgets.input';
import { InstitutionWhereInput } from './institution-where.input';

@InputType()
export class InstitutionUpsertWithoutAnnual_budgetsInput {

    @Field(() => InstitutionUpdateWithoutAnnual_budgetsInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutAnnual_budgetsInput)
    update!: InstitutionUpdateWithoutAnnual_budgetsInput;

    @Field(() => InstitutionCreateWithoutAnnual_budgetsInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutAnnual_budgetsInput)
    create!: InstitutionCreateWithoutAnnual_budgetsInput;

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;
}
