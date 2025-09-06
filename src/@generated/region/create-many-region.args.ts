import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RegionCreateManyInput } from './region-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyRegionArgs {

    @Field(() => [RegionCreateManyInput], {nullable:false})
    @Type(() => RegionCreateManyInput)
    data!: Array<RegionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
