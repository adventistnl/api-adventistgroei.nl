import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PreacherRegionAccessScalarWhereInput {

    @Field(() => [PreacherRegionAccessScalarWhereInput], {nullable:true})
    AND?: Array<PreacherRegionAccessScalarWhereInput>;

    @Field(() => [PreacherRegionAccessScalarWhereInput], {nullable:true})
    OR?: Array<PreacherRegionAccessScalarWhereInput>;

    @Field(() => [PreacherRegionAccessScalarWhereInput], {nullable:true})
    NOT?: Array<PreacherRegionAccessScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    institution_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    user_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    region_id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    created_by?: StringFilter;
}
