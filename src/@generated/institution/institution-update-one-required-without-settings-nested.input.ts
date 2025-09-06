import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutSettingsInput } from './institution-create-without-settings.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutSettingsInput } from './institution-create-or-connect-without-settings.input';
import { InstitutionUpsertWithoutSettingsInput } from './institution-upsert-without-settings.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { InstitutionUpdateToOneWithWhereWithoutSettingsInput } from './institution-update-to-one-with-where-without-settings.input';

@InputType()
export class InstitutionUpdateOneRequiredWithoutSettingsNestedInput {

    @Field(() => InstitutionCreateWithoutSettingsInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutSettingsInput)
    create?: InstitutionCreateWithoutSettingsInput;

    @Field(() => InstitutionCreateOrConnectWithoutSettingsInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutSettingsInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutSettingsInput;

    @Field(() => InstitutionUpsertWithoutSettingsInput, {nullable:true})
    @Type(() => InstitutionUpsertWithoutSettingsInput)
    upsert?: InstitutionUpsertWithoutSettingsInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionUpdateToOneWithWhereWithoutSettingsInput, {nullable:true})
    @Type(() => InstitutionUpdateToOneWithWhereWithoutSettingsInput)
    update?: InstitutionUpdateToOneWithWhereWithoutSettingsInput;
}
