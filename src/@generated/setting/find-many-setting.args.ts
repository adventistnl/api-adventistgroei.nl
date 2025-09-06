import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettingWhereInput } from './setting-where.input';
import { Type } from 'class-transformer';
import { SettingOrderByWithRelationInput } from './setting-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SettingWhereUniqueInput } from './setting-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SettingScalarFieldEnum } from './setting-scalar-field.enum';

@ArgsType()
export class FindManySettingArgs {

    @Field(() => SettingWhereInput, {nullable:true})
    @Type(() => SettingWhereInput)
    where?: SettingWhereInput;

    @Field(() => [SettingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SettingOrderByWithRelationInput>;

    @Field(() => SettingWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SettingWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SettingScalarFieldEnum], {nullable:true})
    distinct?: Array<`${SettingScalarFieldEnum}`>;
}
