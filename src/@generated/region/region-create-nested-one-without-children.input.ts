import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionCreateWithoutChildrenInput } from './region-create-without-children.input';
import { Type } from 'class-transformer';
import { RegionCreateOrConnectWithoutChildrenInput } from './region-create-or-connect-without-children.input';
import { Prisma } from '@prisma/client';
import { RegionWhereUniqueInput } from './region-where-unique.input';

@InputType()
export class RegionCreateNestedOneWithoutChildrenInput {

    @Field(() => RegionCreateWithoutChildrenInput, {nullable:true})
    @Type(() => RegionCreateWithoutChildrenInput)
    create?: RegionCreateWithoutChildrenInput;

    @Field(() => RegionCreateOrConnectWithoutChildrenInput, {nullable:true})
    @Type(() => RegionCreateOrConnectWithoutChildrenInput)
    connectOrCreate?: RegionCreateOrConnectWithoutChildrenInput;

    @Field(() => RegionWhereUniqueInput, {nullable:true})
    @Type(() => RegionWhereUniqueInput)
    connect?: Prisma.AtLeast<RegionWhereUniqueInput, 'id'>;
}
