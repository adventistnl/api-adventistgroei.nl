import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PreacherRegionAccessCreateManyInput } from './preacher-region-access-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPreacherRegionAccessArgs {

    @Field(() => [PreacherRegionAccessCreateManyInput], {nullable:false})
    @Type(() => PreacherRegionAccessCreateManyInput)
    data!: Array<PreacherRegionAccessCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
