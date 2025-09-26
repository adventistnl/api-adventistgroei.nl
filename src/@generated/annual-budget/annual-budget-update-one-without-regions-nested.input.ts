import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetCreateWithoutRegionsInput } from './annual-budget-create-without-regions.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateOrConnectWithoutRegionsInput } from './annual-budget-create-or-connect-without-regions.input';
import { AnnualBudgetUpsertWithoutRegionsInput } from './annual-budget-upsert-without-regions.input';
import { AnnualBudgetWhereInput } from './annual-budget-where.input';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';
import { AnnualBudgetUpdateToOneWithWhereWithoutRegionsInput } from './annual-budget-update-to-one-with-where-without-regions.input';

@InputType()
export class AnnualBudgetUpdateOneWithoutRegionsNestedInput {

    @Field(() => AnnualBudgetCreateWithoutRegionsInput, {nullable:true})
    @Type(() => AnnualBudgetCreateWithoutRegionsInput)
    create?: AnnualBudgetCreateWithoutRegionsInput;

    @Field(() => AnnualBudgetCreateOrConnectWithoutRegionsInput, {nullable:true})
    @Type(() => AnnualBudgetCreateOrConnectWithoutRegionsInput)
    connectOrCreate?: AnnualBudgetCreateOrConnectWithoutRegionsInput;

    @Field(() => AnnualBudgetUpsertWithoutRegionsInput, {nullable:true})
    @Type(() => AnnualBudgetUpsertWithoutRegionsInput)
    upsert?: AnnualBudgetUpsertWithoutRegionsInput;

    @Field(() => AnnualBudgetWhereInput, {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    disconnect?: AnnualBudgetWhereInput;

    @Field(() => AnnualBudgetWhereInput, {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    delete?: AnnualBudgetWhereInput;

    @Field(() => AnnualBudgetWhereUniqueInput, {nullable:true})
    @Type(() => AnnualBudgetWhereUniqueInput)
    connect?: Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>;

    @Field(() => AnnualBudgetUpdateToOneWithWhereWithoutRegionsInput, {nullable:true})
    @Type(() => AnnualBudgetUpdateToOneWithWhereWithoutRegionsInput)
    update?: AnnualBudgetUpdateToOneWithWhereWithoutRegionsInput;
}
