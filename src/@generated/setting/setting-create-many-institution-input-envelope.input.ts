import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettingCreateManyInstitutionInput } from './setting-create-many-institution.input';
import { Type } from 'class-transformer';

@InputType()
export class SettingCreateManyInstitutionInputEnvelope {

    @Field(() => [SettingCreateManyInstitutionInput], {nullable:false})
    @Type(() => SettingCreateManyInstitutionInput)
    data!: Array<SettingCreateManyInstitutionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
