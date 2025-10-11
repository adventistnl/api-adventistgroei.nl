import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetCreateWithoutInstitutionInput } from './annual-budget-create-without-institution.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateOrConnectWithoutInstitutionInput } from './annual-budget-create-or-connect-without-institution.input';
import { AnnualBudgetUpsertWithWhereUniqueWithoutInstitutionInput } from './annual-budget-upsert-with-where-unique-without-institution.input';
import { AnnualBudgetCreateManyInstitutionInputEnvelope } from './annual-budget-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';
import { AnnualBudgetUpdateWithWhereUniqueWithoutInstitutionInput } from './annual-budget-update-with-where-unique-without-institution.input';
import { AnnualBudgetUpdateManyWithWhereWithoutInstitutionInput } from './annual-budget-update-many-with-where-without-institution.input';
import { AnnualBudgetScalarWhereInput } from './annual-budget-scalar-where.input';

@InputType()
export class AnnualBudgetUpdateManyWithoutInstitutionNestedInput {

    @Field(() => [AnnualBudgetCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => AnnualBudgetCreateWithoutInstitutionInput)
    create?: Array<AnnualBudgetCreateWithoutInstitutionInput>;

    @Field(() => [AnnualBudgetCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => AnnualBudgetCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<AnnualBudgetCreateOrConnectWithoutInstitutionInput>;

    @Field(() => [AnnualBudgetUpsertWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => AnnualBudgetUpsertWithWhereUniqueWithoutInstitutionInput)
    upsert?: Array<AnnualBudgetUpsertWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => AnnualBudgetCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => AnnualBudgetCreateManyInstitutionInputEnvelope)
    createMany?: AnnualBudgetCreateManyInstitutionInputEnvelope;

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

    @Field(() => [AnnualBudgetUpdateWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => AnnualBudgetUpdateWithWhereUniqueWithoutInstitutionInput)
    update?: Array<AnnualBudgetUpdateWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => [AnnualBudgetUpdateManyWithWhereWithoutInstitutionInput], {nullable:true})
    @Type(() => AnnualBudgetUpdateManyWithWhereWithoutInstitutionInput)
    updateMany?: Array<AnnualBudgetUpdateManyWithWhereWithoutInstitutionInput>;

    @Field(() => [AnnualBudgetScalarWhereInput], {nullable:true})
    @Type(() => AnnualBudgetScalarWhereInput)
    deleteMany?: Array<AnnualBudgetScalarWhereInput>;
}
