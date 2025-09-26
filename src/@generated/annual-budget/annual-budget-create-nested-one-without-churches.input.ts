import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetCreateWithoutChurchesInput } from './annual-budget-create-without-churches.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateOrConnectWithoutChurchesInput } from './annual-budget-create-or-connect-without-churches.input';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';

@InputType()
export class AnnualBudgetCreateNestedOneWithoutChurchesInput {

    @Field(() => AnnualBudgetCreateWithoutChurchesInput, {nullable:true})
    @Type(() => AnnualBudgetCreateWithoutChurchesInput)
    create?: AnnualBudgetCreateWithoutChurchesInput;

    @Field(() => AnnualBudgetCreateOrConnectWithoutChurchesInput, {nullable:true})
    @Type(() => AnnualBudgetCreateOrConnectWithoutChurchesInput)
    connectOrCreate?: AnnualBudgetCreateOrConnectWithoutChurchesInput;

    @Field(() => AnnualBudgetWhereUniqueInput, {nullable:true})
    @Type(() => AnnualBudgetWhereUniqueInput)
    connect?: Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>;
}
