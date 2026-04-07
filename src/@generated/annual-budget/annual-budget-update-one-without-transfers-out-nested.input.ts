import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetCreateWithoutTransfers_outInput } from './annual-budget-create-without-transfers-out.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateOrConnectWithoutTransfers_outInput } from './annual-budget-create-or-connect-without-transfers-out.input';
import { AnnualBudgetUpsertWithoutTransfers_outInput } from './annual-budget-upsert-without-transfers-out.input';
import { AnnualBudgetWhereInput } from './annual-budget-where.input';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';
import { AnnualBudgetUpdateToOneWithWhereWithoutTransfers_outInput } from './annual-budget-update-to-one-with-where-without-transfers-out.input';

@InputType()
export class AnnualBudgetUpdateOneWithoutTransfers_outNestedInput {

    @Field(() => AnnualBudgetCreateWithoutTransfers_outInput, {nullable:true})
    @Type(() => AnnualBudgetCreateWithoutTransfers_outInput)
    create?: AnnualBudgetCreateWithoutTransfers_outInput;

    @Field(() => AnnualBudgetCreateOrConnectWithoutTransfers_outInput, {nullable:true})
    @Type(() => AnnualBudgetCreateOrConnectWithoutTransfers_outInput)
    connectOrCreate?: AnnualBudgetCreateOrConnectWithoutTransfers_outInput;

    @Field(() => AnnualBudgetUpsertWithoutTransfers_outInput, {nullable:true})
    @Type(() => AnnualBudgetUpsertWithoutTransfers_outInput)
    upsert?: AnnualBudgetUpsertWithoutTransfers_outInput;

    @Field(() => AnnualBudgetWhereInput, {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    disconnect?: AnnualBudgetWhereInput;

    @Field(() => AnnualBudgetWhereInput, {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    delete?: AnnualBudgetWhereInput;

    @Field(() => AnnualBudgetWhereUniqueInput, {nullable:true})
    @Type(() => AnnualBudgetWhereUniqueInput)
    connect?: Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>;

    @Field(() => AnnualBudgetUpdateToOneWithWhereWithoutTransfers_outInput, {nullable:true})
    @Type(() => AnnualBudgetUpdateToOneWithWhereWithoutTransfers_outInput)
    update?: AnnualBudgetUpdateToOneWithWhereWithoutTransfers_outInput;
}
