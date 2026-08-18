import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PreacherRegionAccessUser_idRegion_idCompoundUniqueInput } from './preacher-region-access-user-id-region-id-compound-unique.input';
import { PreacherRegionAccessWhereInput } from './preacher-region-access-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { InstitutionScalarRelationFilter } from '../institution/institution-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { RegionScalarRelationFilter } from '../region/region-scalar-relation-filter.input';

@InputType()
export class PreacherRegionAccessWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => PreacherRegionAccessUser_idRegion_idCompoundUniqueInput, {nullable:true})
    user_id_region_id?: PreacherRegionAccessUser_idRegion_idCompoundUniqueInput;

    @Field(() => [PreacherRegionAccessWhereInput], {nullable:true})
    AND?: Array<PreacherRegionAccessWhereInput>;

    @Field(() => [PreacherRegionAccessWhereInput], {nullable:true})
    OR?: Array<PreacherRegionAccessWhereInput>;

    @Field(() => [PreacherRegionAccessWhereInput], {nullable:true})
    NOT?: Array<PreacherRegionAccessWhereInput>;

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

    @Field(() => InstitutionScalarRelationFilter, {nullable:true})
    @Type(() => InstitutionScalarRelationFilter)
    institution?: InstitutionScalarRelationFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    @Type(() => UserScalarRelationFilter)
    user?: UserScalarRelationFilter;

    @Field(() => RegionScalarRelationFilter, {nullable:true})
    region?: RegionScalarRelationFilter;
}
