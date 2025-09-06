import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RegionWhereUniqueInput } from './region-where-unique.input';
import { Type } from 'class-transformer';
import { RegionCreateWithoutChildrenInput } from './region-create-without-children.input';

@InputType()
export class RegionCreateOrConnectWithoutChildrenInput {

    @Field(() => RegionWhereUniqueInput, {nullable:false})
    @Type(() => RegionWhereUniqueInput)
    where!: Prisma.AtLeast<RegionWhereUniqueInput, 'id'>;

    @Field(() => RegionCreateWithoutChildrenInput, {nullable:false})
    @Type(() => RegionCreateWithoutChildrenInput)
    create!: RegionCreateWithoutChildrenInput;
}
