import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetCreateWithoutTransfers_inInput } from './annual-budget-create-without-transfers-in.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateOrConnectWithoutTransfers_inInput } from './annual-budget-create-or-connect-without-transfers-in.input';
import { AnnualBudgetUpsertWithoutTransfers_inInput } from './annual-budget-upsert-without-transfers-in.input';
import { AnnualBudgetWhereInput } from './annual-budget-where.input';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';
import { AnnualBudgetUpdateToOneWithWhereWithoutTransfers_inInput } from './annual-budget-update-to-one-with-where-without-transfers-in.input';

@InputType()
export class AnnualBudgetUpdateOneWithoutTransfers_inNestedInput {

    @Field(() => AnnualBudgetCreateWithoutTransfers_inInput, {nullable:true})
    @Type(() => AnnualBudgetCreateWithoutTransfers_inInput)
    create?: AnnualBudgetCreateWithoutTransfers_inInput;

    @Field(() => AnnualBudgetCreateOrConnectWithoutTransfers_inInput, {nullable:true})
    @Type(() => AnnualBudgetCreateOrConnectWithoutTransfers_inInput)
    connectOrCreate?: AnnualBudgetCreateOrConnectWithoutTransfers_inInput;

    @Field(() => AnnualBudgetUpsertWithoutTransfers_inInput, {nullable:true})
    @Type(() => AnnualBudgetUpsertWithoutTransfers_inInput)
    upsert?: AnnualBudgetUpsertWithoutTransfers_inInput;

    @Field(() => AnnualBudgetWhereInput, {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    disconnect?: AnnualBudgetWhereInput;

    @Field(() => AnnualBudgetWhereInput, {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    delete?: AnnualBudgetWhereInput;

    @Field(() => AnnualBudgetWhereUniqueInput, {nullable:true})
    @Type(() => AnnualBudgetWhereUniqueInput)
    connect?: Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>;

    @Field(() => AnnualBudgetUpdateToOneWithWhereWithoutTransfers_inInput, {nullable:true})
    @Type(() => AnnualBudgetUpdateToOneWithWhereWithoutTransfers_inInput)
    update?: AnnualBudgetUpdateToOneWithWhereWithoutTransfers_inInput;
}
