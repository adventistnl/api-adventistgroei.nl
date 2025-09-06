import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutSettingsInput } from './institution-create-without-settings.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutSettingsInput } from './institution-create-or-connect-without-settings.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';

@InputType()
export class InstitutionCreateNestedOneWithoutSettingsInput {

    @Field(() => InstitutionCreateWithoutSettingsInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutSettingsInput)
    create?: InstitutionCreateWithoutSettingsInput;

    @Field(() => InstitutionCreateOrConnectWithoutSettingsInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutSettingsInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutSettingsInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;
}
