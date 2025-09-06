import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionWhereInput } from './region-where.input';
import { Type } from 'class-transformer';
import { RegionUpdateWithoutChurchesInput } from './region-update-without-churches.input';

@InputType()
export class RegionUpdateToOneWithWhereWithoutChurchesInput {

    @Field(() => RegionWhereInput, {nullable:true})
    @Type(() => RegionWhereInput)
    where?: RegionWhereInput;

    @Field(() => RegionUpdateWithoutChurchesInput, {nullable:false})
    @Type(() => RegionUpdateWithoutChurchesInput)
    data!: RegionUpdateWithoutChurchesInput;
}
