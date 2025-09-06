import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutSettingsInput } from './institution-create-without-settings.input';

@InputType()
export class InstitutionCreateOrConnectWithoutSettingsInput {

    @Field(() => InstitutionWhereUniqueInput, {nullable:false})
    @Type(() => InstitutionWhereUniqueInput)
    where!: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionCreateWithoutSettingsInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutSettingsInput)
    create!: InstitutionCreateWithoutSettingsInput;
}
