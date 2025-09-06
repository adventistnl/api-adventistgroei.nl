import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchCreateManyRegionInput } from './church-create-many-region.input';
import { Type } from 'class-transformer';

@InputType()
export class ChurchCreateManyRegionInputEnvelope {

    @Field(() => [ChurchCreateManyRegionInput], {nullable:false})
    @Type(() => ChurchCreateManyRegionInput)
    data!: Array<ChurchCreateManyRegionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
