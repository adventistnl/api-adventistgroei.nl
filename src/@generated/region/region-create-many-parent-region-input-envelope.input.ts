import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionCreateManyParent_regionInput } from './region-create-many-parent-region.input';
import { Type } from 'class-transformer';

@InputType()
export class RegionCreateManyParent_regionInputEnvelope {

    @Field(() => [RegionCreateManyParent_regionInput], {nullable:false})
    @Type(() => RegionCreateManyParent_regionInput)
    data!: Array<RegionCreateManyParent_regionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
