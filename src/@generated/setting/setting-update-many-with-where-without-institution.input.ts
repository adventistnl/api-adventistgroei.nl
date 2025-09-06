import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettingScalarWhereInput } from './setting-scalar-where.input';
import { Type } from 'class-transformer';
import { SettingUpdateManyMutationInput } from './setting-update-many-mutation.input';

@InputType()
export class SettingUpdateManyWithWhereWithoutInstitutionInput {

    @Field(() => SettingScalarWhereInput, {nullable:false})
    @Type(() => SettingScalarWhereInput)
    where!: SettingScalarWhereInput;

    @Field(() => SettingUpdateManyMutationInput, {nullable:false})
    @Type(() => SettingUpdateManyMutationInput)
    data!: SettingUpdateManyMutationInput;
}
