import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetCreateWithoutChurchInput } from './annual-budget-create-without-church.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateOrConnectWithoutChurchInput } from './annual-budget-create-or-connect-without-church.input';
import { AnnualBudgetUpsertWithWhereUniqueWithoutChurchInput } from './annual-budget-upsert-with-where-unique-without-church.input';
import { AnnualBudgetCreateManyChurchInputEnvelope } from './annual-budget-create-many-church-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';
import { AnnualBudgetUpdateWithWhereUniqueWithoutChurchInput } from './annual-budget-update-with-where-unique-without-church.input';
import { AnnualBudgetUpdateManyWithWhereWithoutChurchInput } from './annual-budget-update-many-with-where-without-church.input';
import { AnnualBudgetScalarWhereInput } from './annual-budget-scalar-where.input';

@InputType()
export class AnnualBudgetUncheckedUpdateManyWithoutChurchNestedInput {

    @Field(() => [AnnualBudgetCreateWithoutChurchInput], {nullable:true})
    @Type(() => AnnualBudgetCreateWithoutChurchInput)
    create?: Array<AnnualBudgetCreateWithoutChurchInput>;

    @Field(() => [AnnualBudgetCreateOrConnectWithoutChurchInput], {nullable:true})
    @Type(() => AnnualBudgetCreateOrConnectWithoutChurchInput)
    connectOrCreate?: Array<AnnualBudgetCreateOrConnectWithoutChurchInput>;

    @Field(() => [AnnualBudgetUpsertWithWhereUniqueWithoutChurchInput], {nullable:true})
    @Type(() => AnnualBudgetUpsertWithWhereUniqueWithoutChurchInput)
    upsert?: Array<AnnualBudgetUpsertWithWhereUniqueWithoutChurchInput>;

    @Field(() => AnnualBudgetCreateManyChurchInputEnvelope, {nullable:true})
    @Type(() => AnnualBudgetCreateManyChurchInputEnvelope)
    createMany?: AnnualBudgetCreateManyChurchInputEnvelope;

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

    @Field(() => [AnnualBudgetUpdateWithWhereUniqueWithoutChurchInput], {nullable:true})
    @Type(() => AnnualBudgetUpdateWithWhereUniqueWithoutChurchInput)
    update?: Array<AnnualBudgetUpdateWithWhereUniqueWithoutChurchInput>;

    @Field(() => [AnnualBudgetUpdateManyWithWhereWithoutChurchInput], {nullable:true})
    @Type(() => AnnualBudgetUpdateManyWithWhereWithoutChurchInput)
    updateMany?: Array<AnnualBudgetUpdateManyWithWhereWithoutChurchInput>;

    @Field(() => [AnnualBudgetScalarWhereInput], {nullable:true})
    @Type(() => AnnualBudgetScalarWhereInput)
    deleteMany?: Array<AnnualBudgetScalarWhereInput>;
}
