import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetCreateWithoutRegionInput } from './annual-budget-create-without-region.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateOrConnectWithoutRegionInput } from './annual-budget-create-or-connect-without-region.input';
import { AnnualBudgetCreateManyRegionInputEnvelope } from './annual-budget-create-many-region-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';

@InputType()
export class AnnualBudgetCreateNestedManyWithoutRegionInput {

    @Field(() => [AnnualBudgetCreateWithoutRegionInput], {nullable:true})
    @Type(() => AnnualBudgetCreateWithoutRegionInput)
    create?: Array<AnnualBudgetCreateWithoutRegionInput>;

    @Field(() => [AnnualBudgetCreateOrConnectWithoutRegionInput], {nullable:true})
    @Type(() => AnnualBudgetCreateOrConnectWithoutRegionInput)
    connectOrCreate?: Array<AnnualBudgetCreateOrConnectWithoutRegionInput>;

    @Field(() => AnnualBudgetCreateManyRegionInputEnvelope, {nullable:true})
    @Type(() => AnnualBudgetCreateManyRegionInputEnvelope)
    createMany?: AnnualBudgetCreateManyRegionInputEnvelope;

    @Field(() => [AnnualBudgetWhereUniqueInput], {nullable:true})
    @Type(() => AnnualBudgetWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>>;
}
