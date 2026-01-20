import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ChurchType } from '../prisma/church-type.enum';

@ObjectType()
export class ChurchMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ChurchType, {nullable:true})
    type?: `${ChurchType}`;

    @Field(() => String, {nullable:true})
    institution_id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    region_id?: string;

    @Field(() => String, {nullable:true})
    contact_id?: string;

    @Field(() => String, {nullable:true})
    leader_id?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => Boolean, {nullable:true})
    is_deleted?: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;
}
