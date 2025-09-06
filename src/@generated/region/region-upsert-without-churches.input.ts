import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionUpdateWithoutChurchesInput } from './region-update-without-churches.input';
import { Type } from 'class-transformer';
import { RegionCreateWithoutChurchesInput } from './region-create-without-churches.input';
import { RegionWhereInput } from './region-where.input';

@InputType()
export class RegionUpsertWithoutChurchesInput {

    @Field(() => RegionUpdateWithoutChurchesInput, {nullable:false})
    @Type(() => RegionUpdateWithoutChurchesInput)
    update!: RegionUpdateWithoutChurchesInput;

    @Field(() => RegionCreateWithoutChurchesInput, {nullable:false})
    @Type(() => RegionCreateWithoutChurchesInput)
    create!: RegionCreateWithoutChurchesInput;

    @Field(() => RegionWhereInput, {nullable:true})
    @Type(() => RegionWhereInput)
    where?: RegionWhereInput;
}
