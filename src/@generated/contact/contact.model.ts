import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Institution } from '../institution/institution.model';
import { Region } from '../region/region.model';
import { Church } from '../church/church.model';
import { Department } from '../department/department.model';
import { User } from '../user/user.model';
import { Event } from '../event/event.model';
import { ContactCount } from './contact-count.output';

@ObjectType()
export class Contact {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    phone!: string | null;

    @Field(() => String, {nullable:true})
    mobile!: string | null;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => String, {nullable:true})
    country!: string | null;

    @Field(() => String, {nullable:true})
    city!: string | null;

    @Field(() => String, {nullable:true})
    address!: string | null;

    @Field(() => String, {nullable:true})
    full_address!: string | null;

    @Field(() => String, {nullable:true})
    postal_code!: string | null;

    @Field(() => String, {nullable:true})
    website!: string | null;

    @Field(() => String, {nullable:true})
    notes!: string | null;

    @Field(() => Boolean, {nullable:false})
    is_primary!: boolean;

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

    @Field(() => Institution, {nullable:true})
    Institution?: Institution | null;

    @Field(() => [Region], {nullable:true})
    Region?: Array<Region>;

    @Field(() => [Church], {nullable:true})
    Church?: Array<Church>;

    @Field(() => [Department], {nullable:true})
    Department?: Array<Department>;

    @Field(() => [User], {nullable:true})
    User?: Array<User>;

    @Field(() => [Event], {nullable:true})
    Event?: Array<Event>;

    @Field(() => ContactCount, {nullable:false})
    _count?: ContactCount;
}
