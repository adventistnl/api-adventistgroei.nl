import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ChurchType } from '../prisma/church-type.enum';
import { ChurchCountAggregate } from './church-count-aggregate.output';
import { ChurchMinAggregate } from './church-min-aggregate.output';
import { ChurchMaxAggregate } from './church-max-aggregate.output';

@ObjectType()
export class ChurchGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => ChurchType, {nullable:false})
    type!: `${ChurchType}`;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    region_id!: string;

    @Field(() => String, {nullable:true})
    contact_id?: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {nullable:false})
    is_deleted!: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => ChurchCountAggregate, {nullable:true})
    _count?: ChurchCountAggregate;

    @Field(() => ChurchMinAggregate, {nullable:true})
    _min?: ChurchMinAggregate;

    @Field(() => ChurchMaxAggregate, {nullable:true})
    _max?: ChurchMaxAggregate;
}
