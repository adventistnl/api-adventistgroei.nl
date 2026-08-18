import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PreacherRegionAccessCreateManyUserInput } from './preacher-region-access-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class PreacherRegionAccessCreateManyUserInputEnvelope {

    @Field(() => [PreacherRegionAccessCreateManyUserInput], {nullable:false})
    @Type(() => PreacherRegionAccessCreateManyUserInput)
    data!: Array<PreacherRegionAccessCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
