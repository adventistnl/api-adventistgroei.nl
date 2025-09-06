import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionCreateWithoutChurchesInput } from './region-create-without-churches.input';
import { Type } from 'class-transformer';
import { RegionCreateOrConnectWithoutChurchesInput } from './region-create-or-connect-without-churches.input';
import { Prisma } from '@prisma/client';
import { RegionWhereUniqueInput } from './region-where-unique.input';

@InputType()
export class RegionCreateNestedOneWithoutChurchesInput {

    @Field(() => RegionCreateWithoutChurchesInput, {nullable:true})
    @Type(() => RegionCreateWithoutChurchesInput)
    create?: RegionCreateWithoutChurchesInput;

    @Field(() => RegionCreateOrConnectWithoutChurchesInput, {nullable:true})
    @Type(() => RegionCreateOrConnectWithoutChurchesInput)
    connectOrCreate?: RegionCreateOrConnectWithoutChurchesInput;

    @Field(() => RegionWhereUniqueInput, {nullable:true})
    @Type(() => RegionWhereUniqueInput)
    connect?: Prisma.AtLeast<RegionWhereUniqueInput, 'id'>;
}
