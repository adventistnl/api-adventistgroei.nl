import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchCreateWithoutInstitutionInput } from './church-create-without-institution.input';
import { Type } from 'class-transformer';
import { ChurchCreateOrConnectWithoutInstitutionInput } from './church-create-or-connect-without-institution.input';
import { ChurchUpsertWithWhereUniqueWithoutInstitutionInput } from './church-upsert-with-where-unique-without-institution.input';
import { ChurchCreateManyInstitutionInputEnvelope } from './church-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';
import { ChurchUpdateWithWhereUniqueWithoutInstitutionInput } from './church-update-with-where-unique-without-institution.input';
import { ChurchUpdateManyWithWhereWithoutInstitutionInput } from './church-update-many-with-where-without-institution.input';
import { ChurchScalarWhereInput } from './church-scalar-where.input';

@InputType()
export class ChurchUpdateManyWithoutInstitutionNestedInput {

    @Field(() => [ChurchCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => ChurchCreateWithoutInstitutionInput)
    create?: Array<ChurchCreateWithoutInstitutionInput>;

    @Field(() => [ChurchCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => ChurchCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<ChurchCreateOrConnectWithoutInstitutionInput>;

    @Field(() => [ChurchUpsertWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => ChurchUpsertWithWhereUniqueWithoutInstitutionInput)
    upsert?: Array<ChurchUpsertWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => ChurchCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => ChurchCreateManyInstitutionInputEnvelope)
    createMany?: ChurchCreateManyInstitutionInputEnvelope;

    @Field(() => [ChurchWhereUniqueInput], {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ChurchWhereUniqueInput, 'id'>>;

    @Field(() => [ChurchWhereUniqueInput], {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ChurchWhereUniqueInput, 'id'>>;

    @Field(() => [ChurchWhereUniqueInput], {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ChurchWhereUniqueInput, 'id'>>;

    @Field(() => [ChurchWhereUniqueInput], {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ChurchWhereUniqueInput, 'id'>>;

    @Field(() => [ChurchUpdateWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => ChurchUpdateWithWhereUniqueWithoutInstitutionInput)
    update?: Array<ChurchUpdateWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => [ChurchUpdateManyWithWhereWithoutInstitutionInput], {nullable:true})
    @Type(() => ChurchUpdateManyWithWhereWithoutInstitutionInput)
    updateMany?: Array<ChurchUpdateManyWithWhereWithoutInstitutionInput>;

    @Field(() => [ChurchScalarWhereInput], {nullable:true})
    @Type(() => ChurchScalarWhereInput)
    deleteMany?: Array<ChurchScalarWhereInput>;
}
