import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionUpdateWithoutSettingsInput } from './institution-update-without-settings.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutSettingsInput } from './institution-create-without-settings.input';
import { InstitutionWhereInput } from './institution-where.input';

@InputType()
export class InstitutionUpsertWithoutSettingsInput {

    @Field(() => InstitutionUpdateWithoutSettingsInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutSettingsInput)
    update!: InstitutionUpdateWithoutSettingsInput;

    @Field(() => InstitutionCreateWithoutSettingsInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutSettingsInput)
    create!: InstitutionCreateWithoutSettingsInput;

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;
}
