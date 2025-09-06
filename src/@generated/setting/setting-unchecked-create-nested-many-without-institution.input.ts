import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettingCreateWithoutInstitutionInput } from './setting-create-without-institution.input';
import { Type } from 'class-transformer';
import { SettingCreateOrConnectWithoutInstitutionInput } from './setting-create-or-connect-without-institution.input';
import { SettingCreateManyInstitutionInputEnvelope } from './setting-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SettingWhereUniqueInput } from './setting-where-unique.input';

@InputType()
export class SettingUncheckedCreateNestedManyWithoutInstitutionInput {

    @Field(() => [SettingCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => SettingCreateWithoutInstitutionInput)
    create?: Array<SettingCreateWithoutInstitutionInput>;

    @Field(() => [SettingCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => SettingCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<SettingCreateOrConnectWithoutInstitutionInput>;

    @Field(() => SettingCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => SettingCreateManyInstitutionInputEnvelope)
    createMany?: SettingCreateManyInstitutionInputEnvelope;

    @Field(() => [SettingWhereUniqueInput], {nullable:true})
    @Type(() => SettingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SettingWhereUniqueInput, 'id'>>;
}
