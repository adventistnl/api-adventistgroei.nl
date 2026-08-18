import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RequestType } from '../prisma/request-type.enum';
import { RequestStatus } from '../prisma/request-status.enum';

@ObjectType()
export class AssignmentRequestMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    institution_id?: string;

    @Field(() => String, {nullable:true})
    church_id?: string;

    @Field(() => Date, {nullable:true})
    date?: Date | string;

    @Field(() => String, {nullable:true})
    user_id?: string;

    @Field(() => RequestType, {nullable:true})
    type?: `${RequestType}`;

    @Field(() => RequestStatus, {nullable:true})
    status?: `${RequestStatus}`;

    @Field(() => String, {nullable:true})
    template_id?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    decided_at?: Date | string;

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
