import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutAnnual_budgetsInput } from './institution-create-without-annual-budgets.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutAnnual_budgetsInput } from './institution-create-or-connect-without-annual-budgets.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';

@InputType()
export class InstitutionCreateNestedOneWithoutAnnual_budgetsInput {

    @Field(() => InstitutionCreateWithoutAnnual_budgetsInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutAnnual_budgetsInput)
    create?: InstitutionCreateWithoutAnnual_budgetsInput;

    @Field(() => InstitutionCreateOrConnectWithoutAnnual_budgetsInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutAnnual_budgetsInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutAnnual_budgetsInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;
}
