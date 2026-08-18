import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PreacherRegionAccessUpdateManyMutationInput } from './preacher-region-access-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PreacherRegionAccessWhereInput } from './preacher-region-access-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyPreacherRegionAccessArgs {

    @Field(() => PreacherRegionAccessUpdateManyMutationInput, {nullable:false})
    @Type(() => PreacherRegionAccessUpdateManyMutationInput)
    data!: PreacherRegionAccessUpdateManyMutationInput;

    @Field(() => PreacherRegionAccessWhereInput, {nullable:true})
    @Type(() => PreacherRegionAccessWhereInput)
    where?: PreacherRegionAccessWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
