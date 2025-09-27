import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DepartmentCountAggregate } from './department-count-aggregate.output';
import { DepartmentMinAggregate } from './department-min-aggregate.output';
import { DepartmentMaxAggregate } from './department-max-aggregate.output';

@ObjectType()
export class DepartmentGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:false})
    church_id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:true})
    annual_budget_id?: string;

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

    @Field(() => DepartmentCountAggregate, {nullable:true})
    _count?: DepartmentCountAggregate;

    @Field(() => DepartmentMinAggregate, {nullable:true})
    _min?: DepartmentMinAggregate;

    @Field(() => DepartmentMaxAggregate, {nullable:true})
    _max?: DepartmentMaxAggregate;
}
