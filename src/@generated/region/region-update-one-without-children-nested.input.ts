import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionCreateWithoutChildrenInput } from './region-create-without-children.input';
import { Type } from 'class-transformer';
import { RegionCreateOrConnectWithoutChildrenInput } from './region-create-or-connect-without-children.input';
import { RegionUpsertWithoutChildrenInput } from './region-upsert-without-children.input';
import { RegionWhereInput } from './region-where.input';
import { Prisma } from '@prisma/client';
import { RegionWhereUniqueInput } from './region-where-unique.input';
import { RegionUpdateToOneWithWhereWithoutChildrenInput } from './region-update-to-one-with-where-without-children.input';

@InputType()
export class RegionUpdateOneWithoutChildrenNestedInput {

    @Field(() => RegionCreateWithoutChildrenInput, {nullable:true})
    @Type(() => RegionCreateWithoutChildrenInput)
    create?: RegionCreateWithoutChildrenInput;

    @Field(() => RegionCreateOrConnectWithoutChildrenInput, {nullable:true})
    @Type(() => RegionCreateOrConnectWithoutChildrenInput)
    connectOrCreate?: RegionCreateOrConnectWithoutChildrenInput;

    @Field(() => RegionUpsertWithoutChildrenInput, {nullable:true})
    @Type(() => RegionUpsertWithoutChildrenInput)
    upsert?: RegionUpsertWithoutChildrenInput;

    @Field(() => RegionWhereInput, {nullable:true})
    @Type(() => RegionWhereInput)
    disconnect?: RegionWhereInput;

    @Field(() => RegionWhereInput, {nullable:true})
    @Type(() => RegionWhereInput)
    delete?: RegionWhereInput;

    @Field(() => RegionWhereUniqueInput, {nullable:true})
    @Type(() => RegionWhereUniqueInput)
    connect?: Prisma.AtLeast<RegionWhereUniqueInput, 'id'>;

    @Field(() => RegionUpdateToOneWithWhereWithoutChildrenInput, {nullable:true})
    @Type(() => RegionUpdateToOneWithWhereWithoutChildrenInput)
    update?: RegionUpdateToOneWithWhereWithoutChildrenInput;
}
