import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SettingWhereUniqueInput } from './setting-where-unique.input';
import { Type } from 'class-transformer';
import { SettingCreateInput } from './setting-create.input';
import { SettingUpdateInput } from './setting-update.input';

@ArgsType()
export class UpsertOneSettingArgs {

    @Field(() => SettingWhereUniqueInput, {nullable:false})
    @Type(() => SettingWhereUniqueInput)
    where!: Prisma.AtLeast<SettingWhereUniqueInput, 'id'>;

    @Field(() => SettingCreateInput, {nullable:false})
    @Type(() => SettingCreateInput)
    create!: SettingCreateInput;

    @Field(() => SettingUpdateInput, {nullable:false})
    @Type(() => SettingUpdateInput)
    update!: SettingUpdateInput;
}
