import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RegionWhereUniqueInput } from './region-where-unique.input';
import { Type } from 'class-transformer';
import { RegionUpdateWithoutContactInput } from './region-update-without-contact.input';

@InputType()
export class RegionUpdateWithWhereUniqueWithoutContactInput {

    @Field(() => RegionWhereUniqueInput, {nullable:false})
    @Type(() => RegionWhereUniqueInput)
    where!: Prisma.AtLeast<RegionWhereUniqueInput, 'id'>;

    @Field(() => RegionUpdateWithoutContactInput, {nullable:false})
    @Type(() => RegionUpdateWithoutContactInput)
    data!: RegionUpdateWithoutContactInput;
}
