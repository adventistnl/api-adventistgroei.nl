import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserRoleCountAggregate } from './user-role-count-aggregate.output';
import { UserRoleMinAggregate } from './user-role-min-aggregate.output';
import { UserRoleMaxAggregate } from './user-role-max-aggregate.output';

@ObjectType()
export class UserRoleGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => String, {nullable:false})
    role_id!: string;

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

    @Field(() => UserRoleCountAggregate, {nullable:true})
    _count?: UserRoleCountAggregate;

    @Field(() => UserRoleMinAggregate, {nullable:true})
    _min?: UserRoleMinAggregate;

    @Field(() => UserRoleMaxAggregate, {nullable:true})
    _max?: UserRoleMaxAggregate;
}
