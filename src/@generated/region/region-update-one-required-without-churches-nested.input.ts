import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionCreateWithoutChurchesInput } from './region-create-without-churches.input';
import { Type } from 'class-transformer';
import { RegionCreateOrConnectWithoutChurchesInput } from './region-create-or-connect-without-churches.input';
import { RegionUpsertWithoutChurchesInput } from './region-upsert-without-churches.input';
import { Prisma } from '@prisma/client';
import { RegionWhereUniqueInput } from './region-where-unique.input';
import { RegionUpdateToOneWithWhereWithoutChurchesInput } from './region-update-to-one-with-where-without-churches.input';

@InputType()
export class RegionUpdateOneRequiredWithoutChurchesNestedInput {

    @Field(() => RegionCreateWithoutChurchesInput, {nullable:true})
    @Type(() => RegionCreateWithoutChurchesInput)
    create?: RegionCreateWithoutChurchesInput;

    @Field(() => RegionCreateOrConnectWithoutChurchesInput, {nullable:true})
    @Type(() => RegionCreateOrConnectWithoutChurchesInput)
    connectOrCreate?: RegionCreateOrConnectWithoutChurchesInput;

    @Field(() => RegionUpsertWithoutChurchesInput, {nullable:true})
    @Type(() => RegionUpsertWithoutChurchesInput)
    upsert?: RegionUpsertWithoutChurchesInput;

    @Field(() => RegionWhereUniqueInput, {nullable:true})
    @Type(() => RegionWhereUniqueInput)
    connect?: Prisma.AtLeast<RegionWhereUniqueInput, 'id'>;

    @Field(() => RegionUpdateToOneWithWhereWithoutChurchesInput, {nullable:true})
    @Type(() => RegionUpdateToOneWithWhereWithoutChurchesInput)
    update?: RegionUpdateToOneWithWhereWithoutChurchesInput;
}
