import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTargetType } from '../prisma/event-target-type.enum';

@InputType()
export class CommunicationRecipientUncheckedCreateWithoutCommunicationInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => EventTargetType, {nullable:false})
    target_type!: `${EventTargetType}`;

    @Field(() => String, {nullable:true})
    target_id?: string;

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
