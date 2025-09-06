import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunicationCreateWithoutInstitutionInput } from './communication-create-without-institution.input';
import { Type } from 'class-transformer';
import { CommunicationCreateOrConnectWithoutInstitutionInput } from './communication-create-or-connect-without-institution.input';
import { CommunicationCreateManyInstitutionInputEnvelope } from './communication-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommunicationWhereUniqueInput } from './communication-where-unique.input';

@InputType()
export class CommunicationUncheckedCreateNestedManyWithoutInstitutionInput {

    @Field(() => [CommunicationCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => CommunicationCreateWithoutInstitutionInput)
    create?: Array<CommunicationCreateWithoutInstitutionInput>;

    @Field(() => [CommunicationCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => CommunicationCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<CommunicationCreateOrConnectWithoutInstitutionInput>;

    @Field(() => CommunicationCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => CommunicationCreateManyInstitutionInputEnvelope)
    createMany?: CommunicationCreateManyInstitutionInputEnvelope;

    @Field(() => [CommunicationWhereUniqueInput], {nullable:true})
    @Type(() => CommunicationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommunicationWhereUniqueInput, 'id'>>;
}
