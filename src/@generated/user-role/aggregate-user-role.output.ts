import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserRoleCountAggregate } from './user-role-count-aggregate.output';
import { UserRoleMinAggregate } from './user-role-min-aggregate.output';
import { UserRoleMaxAggregate } from './user-role-max-aggregate.output';

@ObjectType()
export class AggregateUserRole {

    @Field(() => UserRoleCountAggregate, {nullable:true})
    _count?: UserRoleCountAggregate;

    @Field(() => UserRoleMinAggregate, {nullable:true})
    _min?: UserRoleMinAggregate;

    @Field(() => UserRoleMaxAggregate, {nullable:true})
    _max?: UserRoleMaxAggregate;
}
