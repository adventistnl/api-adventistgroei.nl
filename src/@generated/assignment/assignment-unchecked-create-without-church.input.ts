import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentOrigin } from '../prisma/assignment-origin.enum';
import { AssignmentStatus } from '../prisma/assignment-status.enum';

@InputType()
export class AssignmentUncheckedCreateWithoutChurchInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => String, {nullable:true})
    user_id?: string;

    @Field(() => AssignmentOrigin, {nullable:false})
    origin!: `${AssignmentOrigin}`;

    @Field(() => AssignmentStatus, {nullable:true})
    status?: `${AssignmentStatus}`;

    @Field(() => Date, {nullable:true})
    locked_at?: Date | string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {nullable:true})
    is_deleted?: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;
}
