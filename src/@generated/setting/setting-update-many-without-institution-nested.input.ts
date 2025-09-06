import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettingCreateWithoutInstitutionInput } from './setting-create-without-institution.input';
import { Type } from 'class-transformer';
import { SettingCreateOrConnectWithoutInstitutionInput } from './setting-create-or-connect-without-institution.input';
import { SettingUpsertWithWhereUniqueWithoutInstitutionInput } from './setting-upsert-with-where-unique-without-institution.input';
import { SettingCreateManyInstitutionInputEnvelope } from './setting-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SettingWhereUniqueInput } from './setting-where-unique.input';
import { SettingUpdateWithWhereUniqueWithoutInstitutionInput } from './setting-update-with-where-unique-without-institution.input';
import { SettingUpdateManyWithWhereWithoutInstitutionInput } from './setting-update-many-with-where-without-institution.input';
import { SettingScalarWhereInput } from './setting-scalar-where.input';

@InputType()
export class SettingUpdateManyWithoutInstitutionNestedInput {

    @Field(() => [SettingCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => SettingCreateWithoutInstitutionInput)
    create?: Array<SettingCreateWithoutInstitutionInput>;

    @Field(() => [SettingCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => SettingCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<SettingCreateOrConnectWithoutInstitutionInput>;

    @Field(() => [SettingUpsertWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => SettingUpsertWithWhereUniqueWithoutInstitutionInput)
    upsert?: Array<SettingUpsertWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => SettingCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => SettingCreateManyInstitutionInputEnvelope)
    createMany?: SettingCreateManyInstitutionInputEnvelope;

    @Field(() => [SettingWhereUniqueInput], {nullable:true})
    @Type(() => SettingWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SettingWhereUniqueInput, 'id'>>;

    @Field(() => [SettingWhereUniqueInput], {nullable:true})
    @Type(() => SettingWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SettingWhereUniqueInput, 'id'>>;

    @Field(() => [SettingWhereUniqueInput], {nullable:true})
    @Type(() => SettingWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SettingWhereUniqueInput, 'id'>>;

    @Field(() => [SettingWhereUniqueInput], {nullable:true})
    @Type(() => SettingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SettingWhereUniqueInput, 'id'>>;

    @Field(() => [SettingUpdateWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => SettingUpdateWithWhereUniqueWithoutInstitutionInput)
    update?: Array<SettingUpdateWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => [SettingUpdateManyWithWhereWithoutInstitutionInput], {nullable:true})
    @Type(() => SettingUpdateManyWithWhereWithoutInstitutionInput)
    updateMany?: Array<SettingUpdateManyWithWhereWithoutInstitutionInput>;

    @Field(() => [SettingScalarWhereInput], {nullable:true})
    @Type(() => SettingScalarWhereInput)
    deleteMany?: Array<SettingScalarWhereInput>;
}
