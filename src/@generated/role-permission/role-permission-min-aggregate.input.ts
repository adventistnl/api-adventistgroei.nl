import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RolePermissionMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    role_id?: true;

    @Field(() => Boolean, {nullable:true})
    permission_id?: true;

    @Field(() => Boolean, {nullable:true})
    is_essential?: true;

    @Field(() => Boolean, {nullable:true})
    created_at?: true;

    @Field(() => Boolean, {nullable:true})
    updated_at?: true;

    @Field(() => Boolean, {nullable:true})
    created_by?: true;

    @Field(() => Boolean, {nullable:true})
    updated_by?: true;

    @Field(() => Boolean, {nullable:true})
    is_deleted?: true;

    @Field(() => Boolean, {nullable:true})
    deleted_at?: true;

    @Field(() => Boolean, {nullable:true})
    deleted_by?: true;
}
