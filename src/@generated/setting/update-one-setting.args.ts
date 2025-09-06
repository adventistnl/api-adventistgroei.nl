import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettingUpdateInput } from './setting-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { SettingWhereUniqueInput } from './setting-where-unique.input';

@ArgsType()
export class UpdateOneSettingArgs {

    @Field(() => SettingUpdateInput, {nullable:false})
    @Type(() => SettingUpdateInput)
    data!: SettingUpdateInput;

    @Field(() => SettingWhereUniqueInput, {nullable:false})
    @Type(() => SettingWhereUniqueInput)
    where!: Prisma.AtLeast<SettingWhereUniqueInput, 'id'>;
}
