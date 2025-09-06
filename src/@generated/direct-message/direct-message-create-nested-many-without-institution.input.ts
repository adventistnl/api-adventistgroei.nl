import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DirectMessageCreateWithoutInstitutionInput } from './direct-message-create-without-institution.input';
import { Type } from 'class-transformer';
import { DirectMessageCreateOrConnectWithoutInstitutionInput } from './direct-message-create-or-connect-without-institution.input';
import { DirectMessageCreateManyInstitutionInputEnvelope } from './direct-message-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DirectMessageWhereUniqueInput } from './direct-message-where-unique.input';

@InputType()
export class DirectMessageCreateNestedManyWithoutInstitutionInput {

    @Field(() => [DirectMessageCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => DirectMessageCreateWithoutInstitutionInput)
    create?: Array<DirectMessageCreateWithoutInstitutionInput>;

    @Field(() => [DirectMessageCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => DirectMessageCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<DirectMessageCreateOrConnectWithoutInstitutionInput>;

    @Field(() => DirectMessageCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => DirectMessageCreateManyInstitutionInputEnvelope)
    createMany?: DirectMessageCreateManyInstitutionInputEnvelope;

    @Field(() => [DirectMessageWhereUniqueInput], {nullable:true})
    @Type(() => DirectMessageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DirectMessageWhereUniqueInput, 'id'>>;
}
