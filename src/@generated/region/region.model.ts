import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Institution } from '../institution/institution.model';
import { Contact } from '../contact/contact.model';
import { Church } from '../church/church.model';
import { RegionCount } from './region-count.output';

@ObjectType()
export class Region {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    parent_region_id!: string | null;

    @Field(() => String, {nullable:true})
    contact_id!: string | null;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    is_deleted!: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at!: Date | null;

    @Field(() => String, {nullable:true})
    deleted_by!: string | null;

    @Field(() => Institution, {nullable:false})
    institution?: Institution;

    @Field(() => Region, {nullable:true})
    parent_region?: Region | null;

    @Field(() => [Region], {nullable:true})
    children?: Array<Region>;

    @Field(() => Contact, {nullable:true})
    contact?: Contact | null;

    @Field(() => [Church], {nullable:true})
    churches?: Array<Church>;

    @Field(() => RegionCount, {nullable:false})
    _count?: RegionCount;
}
