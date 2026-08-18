import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PreacherRegionAccessWhereInput } from './preacher-region-access-where.input';

@InputType()
export class PreacherRegionAccessListRelationFilter {

    @Field(() => PreacherRegionAccessWhereInput, {nullable:true})
    every?: PreacherRegionAccessWhereInput;

    @Field(() => PreacherRegionAccessWhereInput, {nullable:true})
    some?: PreacherRegionAccessWhereInput;

    @Field(() => PreacherRegionAccessWhereInput, {nullable:true})
    none?: PreacherRegionAccessWhereInput;
}
