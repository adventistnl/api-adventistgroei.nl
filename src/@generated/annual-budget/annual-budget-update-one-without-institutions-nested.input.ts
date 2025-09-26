import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetCreateWithoutInstitutionsInput } from './annual-budget-create-without-institutions.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateOrConnectWithoutInstitutionsInput } from './annual-budget-create-or-connect-without-institutions.input';
import { AnnualBudgetUpsertWithoutInstitutionsInput } from './annual-budget-upsert-without-institutions.input';
import { AnnualBudgetWhereInput } from './annual-budget-where.input';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';
import { AnnualBudgetUpdateToOneWithWhereWithoutInstitutionsInput } from './annual-budget-update-to-one-with-where-without-institutions.input';

@InputType()
export class AnnualBudgetUpdateOneWithoutInstitutionsNestedInput {

    @Field(() => AnnualBudgetCreateWithoutInstitutionsInput, {nullable:true})
    @Type(() => AnnualBudgetCreateWithoutInstitutionsInput)
    create?: AnnualBudgetCreateWithoutInstitutionsInput;

    @Field(() => AnnualBudgetCreateOrConnectWithoutInstitutionsInput, {nullable:true})
    @Type(() => AnnualBudgetCreateOrConnectWithoutInstitutionsInput)
    connectOrCreate?: AnnualBudgetCreateOrConnectWithoutInstitutionsInput;

    @Field(() => AnnualBudgetUpsertWithoutInstitutionsInput, {nullable:true})
    @Type(() => AnnualBudgetUpsertWithoutInstitutionsInput)
    upsert?: AnnualBudgetUpsertWithoutInstitutionsInput;

    @Field(() => AnnualBudgetWhereInput, {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    disconnect?: AnnualBudgetWhereInput;

    @Field(() => AnnualBudgetWhereInput, {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    delete?: AnnualBudgetWhereInput;

    @Field(() => AnnualBudgetWhereUniqueInput, {nullable:true})
    @Type(() => AnnualBudgetWhereUniqueInput)
    connect?: Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>;

    @Field(() => AnnualBudgetUpdateToOneWithWhereWithoutInstitutionsInput, {nullable:true})
    @Type(() => AnnualBudgetUpdateToOneWithWhereWithoutInstitutionsInput)
    update?: AnnualBudgetUpdateToOneWithWhereWithoutInstitutionsInput;
}
