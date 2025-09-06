import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTargetType } from '../prisma/event-target-type.enum';
import { EventCreateNestedOneWithoutEvent_recipientsInput } from '../event/event-create-nested-one-without-event-recipients.input';
import { Type } from 'class-transformer';
import { UserCreateNestedOneWithoutEvent_recipientsInput } from '../user/user-create-nested-one-without-event-recipients.input';

@InputType()
export class EventRecipientCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => EventTargetType, {nullable:false})
    target_type!: `${EventTargetType}`;

    @Field(() => String, {nullable:false})
    target_id!: string;

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

    @Field(() => EventCreateNestedOneWithoutEvent_recipientsInput, {nullable:false})
    @Type(() => EventCreateNestedOneWithoutEvent_recipientsInput)
    event!: EventCreateNestedOneWithoutEvent_recipientsInput;

    @Field(() => UserCreateNestedOneWithoutEvent_recipientsInput, {nullable:true})
    @Type(() => UserCreateNestedOneWithoutEvent_recipientsInput)
    User?: UserCreateNestedOneWithoutEvent_recipientsInput;
}
