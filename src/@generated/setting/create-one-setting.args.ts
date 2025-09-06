import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettingCreateInput } from './setting-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSettingArgs {

    @Field(() => SettingCreateInput, {nullable:false})
    @Type(() => SettingCreateInput)
    data!: SettingCreateInput;
}
