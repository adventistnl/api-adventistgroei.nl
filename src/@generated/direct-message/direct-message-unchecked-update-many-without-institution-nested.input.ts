import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DirectMessageCreateWithoutInstitutionInput } from './direct-message-create-without-institution.input';
import { Type } from 'class-transformer';
import { DirectMessageCreateOrConnectWithoutInstitutionInput } from './direct-message-create-or-connect-without-institution.input';
import { DirectMessageUpsertWithWhereUniqueWithoutInstitutionInput } from './direct-message-upsert-with-where-unique-without-institution.input';
import { DirectMessageCreateManyInstitutionInputEnvelope } from './direct-message-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DirectMessageWhereUniqueInput } from './direct-message-where-unique.input';
import { DirectMessageUpdateWithWhereUniqueWithoutInstitutionInput } from './direct-message-update-with-where-unique-without-institution.input';
import { DirectMessageUpdateManyWithWhereWithoutInstitutionInput } from './direct-message-update-many-with-where-without-institution.input';
import { DirectMessageScalarWhereInput } from './direct-message-scalar-where.input';

@InputType()
export class DirectMessageUncheckedUpdateManyWithoutInstitutionNestedInput {

    @Field(() => [DirectMessageCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => DirectMessageCreateWithoutInstitutionInput)
    create?: Array<DirectMessageCreateWithoutInstitutionInput>;

    @Field(() => [DirectMessageCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => DirectMessageCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<DirectMessageCreateOrConnectWithoutInstitutionInput>;

    @Field(() => [DirectMessageUpsertWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => DirectMessageUpsertWithWhereUniqueWithoutInstitutionInput)
    upsert?: Array<DirectMessageUpsertWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => DirectMessageCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => DirectMessageCreateManyInstitutionInputEnvelope)
    createMany?: DirectMessageCreateManyInstitutionInputEnvelope;

    @Field(() => [DirectMessageWhereUniqueInput], {nullable:true})
    @Type(() => DirectMessageWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DirectMessageWhereUniqueInput, 'id'>>;

    @Field(() => [DirectMessageWhereUniqueInput], {nullable:true})
    @Type(() => DirectMessageWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DirectMessageWhereUniqueInput, 'id'>>;

    @Field(() => [DirectMessageWhereUniqueInput], {nullable:true})
    @Type(() => DirectMessageWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DirectMessageWhereUniqueInput, 'id'>>;

    @Field(() => [DirectMessageWhereUniqueInput], {nullable:true})
    @Type(() => DirectMessageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DirectMessageWhereUniqueInput, 'id'>>;

    @Field(() => [DirectMessageUpdateWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => DirectMessageUpdateWithWhereUniqueWithoutInstitutionInput)
    update?: Array<DirectMessageUpdateWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => [DirectMessageUpdateManyWithWhereWithoutInstitutionInput], {nullable:true})
    @Type(() => DirectMessageUpdateManyWithWhereWithoutInstitutionInput)
    updateMany?: Array<DirectMessageUpdateManyWithWhereWithoutInstitutionInput>;

    @Field(() => [DirectMessageScalarWhereInput], {nullable:true})
    @Type(() => DirectMessageScalarWhereInput)
    deleteMany?: Array<DirectMessageScalarWhereInput>;
}
