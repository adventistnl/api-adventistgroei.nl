import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetCreateWithoutApproved_userInput } from './annual-budget-create-without-approved-user.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateOrConnectWithoutApproved_userInput } from './annual-budget-create-or-connect-without-approved-user.input';
import { AnnualBudgetUpsertWithWhereUniqueWithoutApproved_userInput } from './annual-budget-upsert-with-where-unique-without-approved-user.input';
import { AnnualBudgetCreateManyApproved_userInputEnvelope } from './annual-budget-create-many-approved-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';
import { AnnualBudgetUpdateWithWhereUniqueWithoutApproved_userInput } from './annual-budget-update-with-where-unique-without-approved-user.input';
import { AnnualBudgetUpdateManyWithWhereWithoutApproved_userInput } from './annual-budget-update-many-with-where-without-approved-user.input';
import { AnnualBudgetScalarWhereInput } from './annual-budget-scalar-where.input';

@InputType()
export class AnnualBudgetUpdateManyWithoutApproved_userNestedInput {

    @Field(() => [AnnualBudgetCreateWithoutApproved_userInput], {nullable:true})
    @Type(() => AnnualBudgetCreateWithoutApproved_userInput)
    create?: Array<AnnualBudgetCreateWithoutApproved_userInput>;

    @Field(() => [AnnualBudgetCreateOrConnectWithoutApproved_userInput], {nullable:true})
    @Type(() => AnnualBudgetCreateOrConnectWithoutApproved_userInput)
    connectOrCreate?: Array<AnnualBudgetCreateOrConnectWithoutApproved_userInput>;

    @Field(() => [AnnualBudgetUpsertWithWhereUniqueWithoutApproved_userInput], {nullable:true})
    @Type(() => AnnualBudgetUpsertWithWhereUniqueWithoutApproved_userInput)
    upsert?: Array<AnnualBudgetUpsertWithWhereUniqueWithoutApproved_userInput>;

    @Field(() => AnnualBudgetCreateManyApproved_userInputEnvelope, {nullable:true})
    @Type(() => AnnualBudgetCreateManyApproved_userInputEnvelope)
    createMany?: AnnualBudgetCreateManyApproved_userInputEnvelope;

    @Field(() => [AnnualBudgetWhereUniqueInput], {nullable:true})
    @Type(() => AnnualBudgetWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>>;

    @Field(() => [AnnualBudgetWhereUniqueInput], {nullable:true})
    @Type(() => AnnualBudgetWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>>;

    @Field(() => [AnnualBudgetWhereUniqueInput], {nullable:true})
    @Type(() => AnnualBudgetWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>>;

    @Field(() => [AnnualBudgetWhereUniqueInput], {nullable:true})
    @Type(() => AnnualBudgetWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>>;

    @Field(() => [AnnualBudgetUpdateWithWhereUniqueWithoutApproved_userInput], {nullable:true})
    @Type(() => AnnualBudgetUpdateWithWhereUniqueWithoutApproved_userInput)
    update?: Array<AnnualBudgetUpdateWithWhereUniqueWithoutApproved_userInput>;

    @Field(() => [AnnualBudgetUpdateManyWithWhereWithoutApproved_userInput], {nullable:true})
    @Type(() => AnnualBudgetUpdateManyWithWhereWithoutApproved_userInput)
    updateMany?: Array<AnnualBudgetUpdateManyWithWhereWithoutApproved_userInput>;

    @Field(() => [AnnualBudgetScalarWhereInput], {nullable:true})
    @Type(() => AnnualBudgetScalarWhereInput)
    deleteMany?: Array<AnnualBudgetScalarWhereInput>;
}
