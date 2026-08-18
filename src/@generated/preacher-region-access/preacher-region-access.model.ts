import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Institution } from '../institution/institution.model';
import { User } from '../user/user.model';
import { Region } from '../region/region.model';

/**
 * R6 — reach: LOCAL = home Region only (no row needed here), REGIONAL = every Region with a
 * row here, NATIONAL = every Region in the Institution (no row needed here either — see
 * PreacherRegionAccessScope on the resolver layer for how the three levels are told apart).
 */
@ObjectType({description:'R6 — reach: LOCAL = home Region only (no row needed here), REGIONAL = every Region with a\nrow here, NATIONAL = every Region in the Institution (no row needed here either — see\nPreacherRegionAccessScope on the resolver layer for how the three levels are told apart).'})
export class PreacherRegionAccess {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => String, {nullable:false})
    region_id!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => Institution, {nullable:false})
    institution?: Institution;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Region, {nullable:false})
    region?: Region;
}
