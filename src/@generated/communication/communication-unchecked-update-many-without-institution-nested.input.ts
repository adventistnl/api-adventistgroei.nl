import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunicationCreateWithoutInstitutionInput } from './communication-create-without-institution.input';
import { Type } from 'class-transformer';
import { CommunicationCreateOrConnectWithoutInstitutionInput } from './communication-create-or-connect-without-institution.input';
import { CommunicationUpsertWithWhereUniqueWithoutInstitutionInput } from './communication-upsert-with-where-unique-without-institution.input';
import { CommunicationCreateManyInstitutionInputEnvelope } from './communication-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommunicationWhereUniqueInput } from './communication-where-unique.input';
import { CommunicationUpdateWithWhereUniqueWithoutInstitutionInput } from './communication-update-with-where-unique-without-institution.input';
import { CommunicationUpdateManyWithWhereWithoutInstitutionInput } from './communication-update-many-with-where-without-institution.input';
import { CommunicationScalarWhereInput } from './communication-scalar-where.input';

@InputType()
export class CommunicationUncheckedUpdateManyWithoutInstitutionNestedInput {

    @Field(() => [CommunicationCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => CommunicationCreateWithoutInstitutionInput)
    create?: Array<CommunicationCreateWithoutInstitutionInput>;

    @Field(() => [CommunicationCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => CommunicationCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<CommunicationCreateOrConnectWithoutInstitutionInput>;

    @Field(() => [CommunicationUpsertWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => CommunicationUpsertWithWhereUniqueWithoutInstitutionInput)
    upsert?: Array<CommunicationUpsertWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => CommunicationCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => CommunicationCreateManyInstitutionInputEnvelope)
    createMany?: CommunicationCreateManyInstitutionInputEnvelope;

    @Field(() => [CommunicationWhereUniqueInput], {nullable:true})
    @Type(() => CommunicationWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommunicationWhereUniqueInput, 'id'>>;

    @Field(() => [CommunicationWhereUniqueInput], {nullable:true})
    @Type(() => CommunicationWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommunicationWhereUniqueInput, 'id'>>;

    @Field(() => [CommunicationWhereUniqueInput], {nullable:true})
    @Type(() => CommunicationWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommunicationWhereUniqueInput, 'id'>>;

    @Field(() => [CommunicationWhereUniqueInput], {nullable:true})
    @Type(() => CommunicationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommunicationWhereUniqueInput, 'id'>>;

    @Field(() => [CommunicationUpdateWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => CommunicationUpdateWithWhereUniqueWithoutInstitutionInput)
    update?: Array<CommunicationUpdateWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => [CommunicationUpdateManyWithWhereWithoutInstitutionInput], {nullable:true})
    @Type(() => CommunicationUpdateManyWithWhereWithoutInstitutionInput)
    updateMany?: Array<CommunicationUpdateManyWithWhereWithoutInstitutionInput>;

    @Field(() => [CommunicationScalarWhereInput], {nullable:true})
    @Type(() => CommunicationScalarWhereInput)
    deleteMany?: Array<CommunicationScalarWhereInput>;
}
