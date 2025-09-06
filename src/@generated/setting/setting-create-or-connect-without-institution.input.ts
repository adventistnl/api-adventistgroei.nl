import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SettingWhereUniqueInput } from './setting-where-unique.input';
import { Type } from 'class-transformer';
import { SettingCreateWithoutInstitutionInput } from './setting-create-without-institution.input';

@InputType()
export class SettingCreateOrConnectWithoutInstitutionInput {

    @Field(() => SettingWhereUniqueInput, {nullable:false})
    @Type(() => SettingWhereUniqueInput)
    where!: Prisma.AtLeast<SettingWhereUniqueInput, 'id'>;

    @Field(() => SettingCreateWithoutInstitutionInput, {nullable:false})
    @Type(() => SettingCreateWithoutInstitutionInput)
    create!: SettingCreateWithoutInstitutionInput;
}
