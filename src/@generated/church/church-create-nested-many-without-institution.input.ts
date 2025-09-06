import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchCreateWithoutInstitutionInput } from './church-create-without-institution.input';
import { Type } from 'class-transformer';
import { ChurchCreateOrConnectWithoutInstitutionInput } from './church-create-or-connect-without-institution.input';
import { ChurchCreateManyInstitutionInputEnvelope } from './church-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';

@InputType()
export class ChurchCreateNestedManyWithoutInstitutionInput {

    @Field(() => [ChurchCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => ChurchCreateWithoutInstitutionInput)
    create?: Array<ChurchCreateWithoutInstitutionInput>;

    @Field(() => [ChurchCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => ChurchCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<ChurchCreateOrConnectWithoutInstitutionInput>;

    @Field(() => ChurchCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => ChurchCreateManyInstitutionInputEnvelope)
    createMany?: ChurchCreateManyInstitutionInputEnvelope;

    @Field(() => [ChurchWhereUniqueInput], {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ChurchWhereUniqueInput, 'id'>>;
}
