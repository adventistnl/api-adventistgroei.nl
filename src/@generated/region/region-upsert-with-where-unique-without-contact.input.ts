import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RegionWhereUniqueInput } from './region-where-unique.input';
import { Type } from 'class-transformer';
import { RegionUpdateWithoutContactInput } from './region-update-without-contact.input';
import { RegionCreateWithoutContactInput } from './region-create-without-contact.input';

@InputType()
export class RegionUpsertWithWhereUniqueWithoutContactInput {

    @Field(() => RegionWhereUniqueInput, {nullable:false})
    @Type(() => RegionWhereUniqueInput)
    where!: Prisma.AtLeast<RegionWhereUniqueInput, 'id'>;

    @Field(() => RegionUpdateWithoutContactInput, {nullable:false})
    @Type(() => RegionUpdateWithoutContactInput)
    update!: RegionUpdateWithoutContactInput;

    @Field(() => RegionCreateWithoutContactInput, {nullable:false})
    @Type(() => RegionCreateWithoutContactInput)
    create!: RegionCreateWithoutContactInput;
}
