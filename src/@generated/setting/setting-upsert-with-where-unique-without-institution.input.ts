import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SettingWhereUniqueInput } from './setting-where-unique.input';
import { Type } from 'class-transformer';
import { SettingUpdateWithoutInstitutionInput } from './setting-update-without-institution.input';
import { SettingCreateWithoutInstitutionInput } from './setting-create-without-institution.input';

@InputType()
export class SettingUpsertWithWhereUniqueWithoutInstitutionInput {

    @Field(() => SettingWhereUniqueInput, {nullable:false})
    @Type(() => SettingWhereUniqueInput)
    where!: Prisma.AtLeast<SettingWhereUniqueInput, 'id'>;

    @Field(() => SettingUpdateWithoutInstitutionInput, {nullable:false})
    @Type(() => SettingUpdateWithoutInstitutionInput)
    update!: SettingUpdateWithoutInstitutionInput;

    @Field(() => SettingCreateWithoutInstitutionInput, {nullable:false})
    @Type(() => SettingCreateWithoutInstitutionInput)
    create!: SettingCreateWithoutInstitutionInput;
}
