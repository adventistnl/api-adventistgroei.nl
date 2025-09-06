import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettingWhereInput } from './setting-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManySettingArgs {

    @Field(() => SettingWhereInput, {nullable:true})
    @Type(() => SettingWhereInput)
    where?: SettingWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
