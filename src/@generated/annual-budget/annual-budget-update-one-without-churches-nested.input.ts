import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetCreateWithoutChurchesInput } from './annual-budget-create-without-churches.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateOrConnectWithoutChurchesInput } from './annual-budget-create-or-connect-without-churches.input';
import { AnnualBudgetUpsertWithoutChurchesInput } from './annual-budget-upsert-without-churches.input';
import { AnnualBudgetWhereInput } from './annual-budget-where.input';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';
import { AnnualBudgetUpdateToOneWithWhereWithoutChurchesInput } from './annual-budget-update-to-one-with-where-without-churches.input';

@InputType()
export class AnnualBudgetUpdateOneWithoutChurchesNestedInput {

    @Field(() => AnnualBudgetCreateWithoutChurchesInput, {nullable:true})
    @Type(() => AnnualBudgetCreateWithoutChurchesInput)
    create?: AnnualBudgetCreateWithoutChurchesInput;

    @Field(() => AnnualBudgetCreateOrConnectWithoutChurchesInput, {nullable:true})
    @Type(() => AnnualBudgetCreateOrConnectWithoutChurchesInput)
    connectOrCreate?: AnnualBudgetCreateOrConnectWithoutChurchesInput;

    @Field(() => AnnualBudgetUpsertWithoutChurchesInput, {nullable:true})
    @Type(() => AnnualBudgetUpsertWithoutChurchesInput)
    upsert?: AnnualBudgetUpsertWithoutChurchesInput;

    @Field(() => AnnualBudgetWhereInput, {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    disconnect?: AnnualBudgetWhereInput;

    @Field(() => AnnualBudgetWhereInput, {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    delete?: AnnualBudgetWhereInput;

    @Field(() => AnnualBudgetWhereUniqueInput, {nullable:true})
    @Type(() => AnnualBudgetWhereUniqueInput)
    connect?: Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>;

    @Field(() => AnnualBudgetUpdateToOneWithWhereWithoutChurchesInput, {nullable:true})
    @Type(() => AnnualBudgetUpdateToOneWithWhereWithoutChurchesInput)
    update?: AnnualBudgetUpdateToOneWithWhereWithoutChurchesInput;
}
