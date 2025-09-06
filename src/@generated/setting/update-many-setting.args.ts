import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettingUpdateManyMutationInput } from './setting-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SettingWhereInput } from './setting-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManySettingArgs {

    @Field(() => SettingUpdateManyMutationInput, {nullable:false})
    @Type(() => SettingUpdateManyMutationInput)
    data!: SettingUpdateManyMutationInput;

    @Field(() => SettingWhereInput, {nullable:true})
    @Type(() => SettingWhereInput)
    where?: SettingWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
