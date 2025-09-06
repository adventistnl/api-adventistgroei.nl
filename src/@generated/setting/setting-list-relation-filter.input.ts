import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettingWhereInput } from './setting-where.input';

@InputType()
export class SettingListRelationFilter {

    @Field(() => SettingWhereInput, {nullable:true})
    every?: SettingWhereInput;

    @Field(() => SettingWhereInput, {nullable:true})
    some?: SettingWhereInput;

    @Field(() => SettingWhereInput, {nullable:true})
    none?: SettingWhereInput;
}
