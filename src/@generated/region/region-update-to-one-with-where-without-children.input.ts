import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionWhereInput } from './region-where.input';
import { Type } from 'class-transformer';
import { RegionUpdateWithoutChildrenInput } from './region-update-without-children.input';

@InputType()
export class RegionUpdateToOneWithWhereWithoutChildrenInput {

    @Field(() => RegionWhereInput, {nullable:true})
    @Type(() => RegionWhereInput)
    where?: RegionWhereInput;

    @Field(() => RegionUpdateWithoutChildrenInput, {nullable:false})
    @Type(() => RegionUpdateWithoutChildrenInput)
    data!: RegionUpdateWithoutChildrenInput;
}
