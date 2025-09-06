import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RegionWhereUniqueInput } from './region-where-unique.input';
import { Type } from 'class-transformer';
import { RegionCreateWithoutChurchesInput } from './region-create-without-churches.input';

@InputType()
export class RegionCreateOrConnectWithoutChurchesInput {

    @Field(() => RegionWhereUniqueInput, {nullable:false})
    @Type(() => RegionWhereUniqueInput)
    where!: Prisma.AtLeast<RegionWhereUniqueInput, 'id'>;

    @Field(() => RegionCreateWithoutChurchesInput, {nullable:false})
    @Type(() => RegionCreateWithoutChurchesInput)
    create!: RegionCreateWithoutChurchesInput;
}
