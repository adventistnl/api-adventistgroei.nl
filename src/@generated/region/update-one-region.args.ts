import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RegionUpdateInput } from './region-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { RegionWhereUniqueInput } from './region-where-unique.input';

@ArgsType()
export class UpdateOneRegionArgs {

    @Field(() => RegionUpdateInput, {nullable:false})
    @Type(() => RegionUpdateInput)
    data!: RegionUpdateInput;

    @Field(() => RegionWhereUniqueInput, {nullable:false})
    @Type(() => RegionWhereUniqueInput)
    where!: Prisma.AtLeast<RegionWhereUniqueInput, 'id'>;
}
