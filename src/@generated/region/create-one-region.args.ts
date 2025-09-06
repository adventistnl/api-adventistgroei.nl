import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RegionCreateInput } from './region-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneRegionArgs {

    @Field(() => RegionCreateInput, {nullable:false})
    @Type(() => RegionCreateInput)
    data!: RegionCreateInput;
}
