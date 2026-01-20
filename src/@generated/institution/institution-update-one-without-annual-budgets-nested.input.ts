import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutAnnual_budgetsInput } from './institution-create-without-annual-budgets.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutAnnual_budgetsInput } from './institution-create-or-connect-without-annual-budgets.input';
import { InstitutionUpsertWithoutAnnual_budgetsInput } from './institution-upsert-without-annual-budgets.input';
import { InstitutionWhereInput } from './institution-where.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { InstitutionUpdateToOneWithWhereWithoutAnnual_budgetsInput } from './institution-update-to-one-with-where-without-annual-budgets.input';

@InputType()
export class InstitutionUpdateOneWithoutAnnual_budgetsNestedInput {

    @Field(() => InstitutionCreateWithoutAnnual_budgetsInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutAnnual_budgetsInput)
    create?: InstitutionCreateWithoutAnnual_budgetsInput;

    @Field(() => InstitutionCreateOrConnectWithoutAnnual_budgetsInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutAnnual_budgetsInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutAnnual_budgetsInput;

    @Field(() => InstitutionUpsertWithoutAnnual_budgetsInput, {nullable:true})
    @Type(() => InstitutionUpsertWithoutAnnual_budgetsInput)
    upsert?: InstitutionUpsertWithoutAnnual_budgetsInput;

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    disconnect?: InstitutionWhereInput;

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    delete?: InstitutionWhereInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionUpdateToOneWithWhereWithoutAnnual_budgetsInput, {nullable:true})
    @Type(() => InstitutionUpdateToOneWithWhereWithoutAnnual_budgetsInput)
    update?: InstitutionUpdateToOneWithWhereWithoutAnnual_budgetsInput;
}
