import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetCreateWithoutChurchInput } from './annual-budget-create-without-church.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateOrConnectWithoutChurchInput } from './annual-budget-create-or-connect-without-church.input';
import { AnnualBudgetCreateManyChurchInputEnvelope } from './annual-budget-create-many-church-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';

@InputType()
export class AnnualBudgetCreateNestedManyWithoutChurchInput {

    @Field(() => [AnnualBudgetCreateWithoutChurchInput], {nullable:true})
    @Type(() => AnnualBudgetCreateWithoutChurchInput)
    create?: Array<AnnualBudgetCreateWithoutChurchInput>;

    @Field(() => [AnnualBudgetCreateOrConnectWithoutChurchInput], {nullable:true})
    @Type(() => AnnualBudgetCreateOrConnectWithoutChurchInput)
    connectOrCreate?: Array<AnnualBudgetCreateOrConnectWithoutChurchInput>;

    @Field(() => AnnualBudgetCreateManyChurchInputEnvelope, {nullable:true})
    @Type(() => AnnualBudgetCreateManyChurchInputEnvelope)
    createMany?: AnnualBudgetCreateManyChurchInputEnvelope;

    @Field(() => [AnnualBudgetWhereUniqueInput], {nullable:true})
    @Type(() => AnnualBudgetWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>>;
}
