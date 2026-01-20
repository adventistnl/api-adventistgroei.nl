import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutAnnual_budgetsInput } from './institution-create-without-annual-budgets.input';

@InputType()
export class InstitutionCreateOrConnectWithoutAnnual_budgetsInput {

    @Field(() => InstitutionWhereUniqueInput, {nullable:false})
    @Type(() => InstitutionWhereUniqueInput)
    where!: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionCreateWithoutAnnual_budgetsInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutAnnual_budgetsInput)
    create!: InstitutionCreateWithoutAnnual_budgetsInput;
}
