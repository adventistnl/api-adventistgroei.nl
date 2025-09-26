import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { Type } from 'class-transformer';
import { InstitutionUpdateWithoutAnnual_budgetInput } from './institution-update-without-annual-budget.input';
import { InstitutionCreateWithoutAnnual_budgetInput } from './institution-create-without-annual-budget.input';

@InputType()
export class InstitutionUpsertWithWhereUniqueWithoutAnnual_budgetInput {

    @Field(() => InstitutionWhereUniqueInput, {nullable:false})
    @Type(() => InstitutionWhereUniqueInput)
    where!: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionUpdateWithoutAnnual_budgetInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutAnnual_budgetInput)
    update!: InstitutionUpdateWithoutAnnual_budgetInput;

    @Field(() => InstitutionCreateWithoutAnnual_budgetInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutAnnual_budgetInput)
    create!: InstitutionCreateWithoutAnnual_budgetInput;
}
