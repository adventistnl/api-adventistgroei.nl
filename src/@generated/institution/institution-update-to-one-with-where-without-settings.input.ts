import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionWhereInput } from './institution-where.input';
import { Type } from 'class-transformer';
import { InstitutionUpdateWithoutSettingsInput } from './institution-update-without-settings.input';

@InputType()
export class InstitutionUpdateToOneWithWhereWithoutSettingsInput {

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;

    @Field(() => InstitutionUpdateWithoutSettingsInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutSettingsInput)
    data!: InstitutionUpdateWithoutSettingsInput;
}
