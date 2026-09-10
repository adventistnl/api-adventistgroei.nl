import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PreacherRegionAccessCreateInput } from './preacher-region-access-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePreacherRegionAccessArgs {

    @Field(() => PreacherRegionAccessCreateInput, {nullable:false})
    @Type(() => PreacherRegionAccessCreateInput)
    data!: PreacherRegionAccessCreateInput;
}
