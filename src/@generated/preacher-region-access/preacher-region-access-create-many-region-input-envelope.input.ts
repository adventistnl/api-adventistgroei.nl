import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PreacherRegionAccessCreateManyRegionInput } from './preacher-region-access-create-many-region.input';
import { Type } from 'class-transformer';

@InputType()
export class PreacherRegionAccessCreateManyRegionInputEnvelope {

    @Field(() => [PreacherRegionAccessCreateManyRegionInput], {nullable:false})
    @Type(() => PreacherRegionAccessCreateManyRegionInput)
    data!: Array<PreacherRegionAccessCreateManyRegionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
