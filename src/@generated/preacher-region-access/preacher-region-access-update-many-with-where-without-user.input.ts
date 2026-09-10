import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PreacherRegionAccessScalarWhereInput } from './preacher-region-access-scalar-where.input';
import { Type } from 'class-transformer';
import { PreacherRegionAccessUpdateManyMutationInput } from './preacher-region-access-update-many-mutation.input';

@InputType()
export class PreacherRegionAccessUpdateManyWithWhereWithoutUserInput {

    @Field(() => PreacherRegionAccessScalarWhereInput, {nullable:false})
    @Type(() => PreacherRegionAccessScalarWhereInput)
    where!: PreacherRegionAccessScalarWhereInput;

    @Field(() => PreacherRegionAccessUpdateManyMutationInput, {nullable:false})
    @Type(() => PreacherRegionAccessUpdateManyMutationInput)
    data!: PreacherRegionAccessUpdateManyMutationInput;
}
