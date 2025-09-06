import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionCreateManyContactInput } from './region-create-many-contact.input';
import { Type } from 'class-transformer';

@InputType()
export class RegionCreateManyContactInputEnvelope {

    @Field(() => [RegionCreateManyContactInput], {nullable:false})
    @Type(() => RegionCreateManyContactInput)
    data!: Array<RegionCreateManyContactInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
