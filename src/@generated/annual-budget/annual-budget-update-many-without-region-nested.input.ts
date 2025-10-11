import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetCreateWithoutRegionInput } from './annual-budget-create-without-region.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateOrConnectWithoutRegionInput } from './annual-budget-create-or-connect-without-region.input';
import { AnnualBudgetUpsertWithWhereUniqueWithoutRegionInput } from './annual-budget-upsert-with-where-unique-without-region.input';
import { AnnualBudgetCreateManyRegionInputEnvelope } from './annual-budget-create-many-region-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';
import { AnnualBudgetUpdateWithWhereUniqueWithoutRegionInput } from './annual-budget-update-with-where-unique-without-region.input';
import { AnnualBudgetUpdateManyWithWhereWithoutRegionInput } from './annual-budget-update-many-with-where-without-region.input';
import { AnnualBudgetScalarWhereInput } from './annual-budget-scalar-where.input';

@InputType()
export class AnnualBudgetUpdateManyWithoutRegionNestedInput {

    @Field(() => [AnnualBudgetCreateWithoutRegionInput], {nullable:true})
    @Type(() => AnnualBudgetCreateWithoutRegionInput)
    create?: Array<AnnualBudgetCreateWithoutRegionInput>;

    @Field(() => [AnnualBudgetCreateOrConnectWithoutRegionInput], {nullable:true})
    @Type(() => AnnualBudgetCreateOrConnectWithoutRegionInput)
    connectOrCreate?: Array<AnnualBudgetCreateOrConnectWithoutRegionInput>;

    @Field(() => [AnnualBudgetUpsertWithWhereUniqueWithoutRegionInput], {nullable:true})
    @Type(() => AnnualBudgetUpsertWithWhereUniqueWithoutRegionInput)
    upsert?: Array<AnnualBudgetUpsertWithWhereUniqueWithoutRegionInput>;

    @Field(() => AnnualBudgetCreateManyRegionInputEnvelope, {nullable:true})
    @Type(() => AnnualBudgetCreateManyRegionInputEnvelope)
    createMany?: AnnualBudgetCreateManyRegionInputEnvelope;

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

    @Field(() => [AnnualBudgetUpdateWithWhereUniqueWithoutRegionInput], {nullable:true})
    @Type(() => AnnualBudgetUpdateWithWhereUniqueWithoutRegionInput)
    update?: Array<AnnualBudgetUpdateWithWhereUniqueWithoutRegionInput>;

    @Field(() => [AnnualBudgetUpdateManyWithWhereWithoutRegionInput], {nullable:true})
    @Type(() => AnnualBudgetUpdateManyWithWhereWithoutRegionInput)
    updateMany?: Array<AnnualBudgetUpdateManyWithWhereWithoutRegionInput>;

    @Field(() => [AnnualBudgetScalarWhereInput], {nullable:true})
    @Type(() => AnnualBudgetScalarWhereInput)
    deleteMany?: Array<AnnualBudgetScalarWhereInput>;
}
