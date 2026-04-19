import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { InstitutionPositionType } from '../prisma/institution-position-type.enum';

@ObjectType()
export class InstitutionPositionMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    institution_id?: string;

    @Field(() => InstitutionPositionType, {nullable:true})
    position_type?: `${InstitutionPositionType}`;

    @Field(() => String, {nullable:true})
    user_id?: string;

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
