import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { InstitutionPositionType } from '../prisma/institution-position-type.enum';
import { InstitutionPositionCountAggregate } from './institution-position-count-aggregate.output';
import { InstitutionPositionMinAggregate } from './institution-position-min-aggregate.output';
import { InstitutionPositionMaxAggregate } from './institution-position-max-aggregate.output';

@ObjectType()
export class InstitutionPositionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => InstitutionPositionType, {nullable:false})
    position_type!: `${InstitutionPositionType}`;

    @Field(() => String, {nullable:false})
    user_id!: string;

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

    @Field(() => InstitutionPositionCountAggregate, {nullable:true})
    _count?: InstitutionPositionCountAggregate;

    @Field(() => InstitutionPositionMinAggregate, {nullable:true})
    _min?: InstitutionPositionMinAggregate;

    @Field(() => InstitutionPositionMaxAggregate, {nullable:true})
    _max?: InstitutionPositionMaxAggregate;
}
