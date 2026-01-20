import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetCreateWithoutApproved_userInput } from './annual-budget-create-without-approved-user.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateOrConnectWithoutApproved_userInput } from './annual-budget-create-or-connect-without-approved-user.input';
import { AnnualBudgetCreateManyApproved_userInputEnvelope } from './annual-budget-create-many-approved-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';

@InputType()
export class AnnualBudgetUncheckedCreateNestedManyWithoutApproved_userInput {

    @Field(() => [AnnualBudgetCreateWithoutApproved_userInput], {nullable:true})
    @Type(() => AnnualBudgetCreateWithoutApproved_userInput)
    create?: Array<AnnualBudgetCreateWithoutApproved_userInput>;

    @Field(() => [AnnualBudgetCreateOrConnectWithoutApproved_userInput], {nullable:true})
    @Type(() => AnnualBudgetCreateOrConnectWithoutApproved_userInput)
    connectOrCreate?: Array<AnnualBudgetCreateOrConnectWithoutApproved_userInput>;

    @Field(() => AnnualBudgetCreateManyApproved_userInputEnvelope, {nullable:true})
    @Type(() => AnnualBudgetCreateManyApproved_userInputEnvelope)
    createMany?: AnnualBudgetCreateManyApproved_userInputEnvelope;

    @Field(() => [AnnualBudgetWhereUniqueInput], {nullable:true})
    @Type(() => AnnualBudgetWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>>;
}
