import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionUpdateWithoutChildrenInput } from './region-update-without-children.input';
import { Type } from 'class-transformer';
import { RegionCreateWithoutChildrenInput } from './region-create-without-children.input';
import { RegionWhereInput } from './region-where.input';

@InputType()
export class RegionUpsertWithoutChildrenInput {

    @Field(() => RegionUpdateWithoutChildrenInput, {nullable:false})
    @Type(() => RegionUpdateWithoutChildrenInput)
    update!: RegionUpdateWithoutChildrenInput;

    @Field(() => RegionCreateWithoutChildrenInput, {nullable:false})
    @Type(() => RegionCreateWithoutChildrenInput)
    create!: RegionCreateWithoutChildrenInput;

    @Field(() => RegionWhereInput, {nullable:true})
    @Type(() => RegionWhereInput)
    where?: RegionWhereInput;
}
