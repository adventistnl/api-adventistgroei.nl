import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestCreateWithoutInstitutionInput } from './subsidy-request-create-without-institution.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateOrConnectWithoutInstitutionInput } from './subsidy-request-create-or-connect-without-institution.input';
import { SubsidyRequestUpsertWithWhereUniqueWithoutInstitutionInput } from './subsidy-request-upsert-with-where-unique-without-institution.input';
import { SubsidyRequestCreateManyInstitutionInputEnvelope } from './subsidy-request-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';
import { SubsidyRequestUpdateWithWhereUniqueWithoutInstitutionInput } from './subsidy-request-update-with-where-unique-without-institution.input';
import { SubsidyRequestUpdateManyWithWhereWithoutInstitutionInput } from './subsidy-request-update-many-with-where-without-institution.input';
import { SubsidyRequestScalarWhereInput } from './subsidy-request-scalar-where.input';

@InputType()
export class SubsidyRequestUpdateManyWithoutInstitutionNestedInput {

    @Field(() => [SubsidyRequestCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => SubsidyRequestCreateWithoutInstitutionInput)
    create?: Array<SubsidyRequestCreateWithoutInstitutionInput>;

    @Field(() => [SubsidyRequestCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => SubsidyRequestCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<SubsidyRequestCreateOrConnectWithoutInstitutionInput>;

    @Field(() => [SubsidyRequestUpsertWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => SubsidyRequestUpsertWithWhereUniqueWithoutInstitutionInput)
    upsert?: Array<SubsidyRequestUpsertWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => SubsidyRequestCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => SubsidyRequestCreateManyInstitutionInputEnvelope)
    createMany?: SubsidyRequestCreateManyInstitutionInputEnvelope;

    @Field(() => [SubsidyRequestWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyRequestWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyRequestWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyRequestWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyRequestWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyRequestWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyRequestWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyRequestUpdateWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => SubsidyRequestUpdateWithWhereUniqueWithoutInstitutionInput)
    update?: Array<SubsidyRequestUpdateWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => [SubsidyRequestUpdateManyWithWhereWithoutInstitutionInput], {nullable:true})
    @Type(() => SubsidyRequestUpdateManyWithWhereWithoutInstitutionInput)
    updateMany?: Array<SubsidyRequestUpdateManyWithWhereWithoutInstitutionInput>;

    @Field(() => [SubsidyRequestScalarWhereInput], {nullable:true})
    @Type(() => SubsidyRequestScalarWhereInput)
    deleteMany?: Array<SubsidyRequestScalarWhereInput>;
}
