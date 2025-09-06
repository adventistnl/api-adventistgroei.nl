import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleWhereInput } from './role-where.input';

@InputType()
export class RoleScalarRelationFilter {

    @Field(() => RoleWhereInput, {nullable:true})
    is?: RoleWhereInput;

    @Field(() => RoleWhereInput, {nullable:true})
    isNot?: RoleWhereInput;
}
