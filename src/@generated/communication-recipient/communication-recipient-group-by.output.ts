import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EventTargetType } from '../prisma/event-target-type.enum';
import { CommunicationRecipientCountAggregate } from './communication-recipient-count-aggregate.output';
import { CommunicationRecipientMinAggregate } from './communication-recipient-min-aggregate.output';
import { CommunicationRecipientMaxAggregate } from './communication-recipient-max-aggregate.output';

@ObjectType()
export class CommunicationRecipientGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    communication_id!: string;

    @Field(() => EventTargetType, {nullable:false})
    target_type!: `${EventTargetType}`;

    @Field(() => String, {nullable:true})
    target_id?: string;

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

    @Field(() => CommunicationRecipientCountAggregate, {nullable:true})
    _count?: CommunicationRecipientCountAggregate;

    @Field(() => CommunicationRecipientMinAggregate, {nullable:true})
    _min?: CommunicationRecipientMinAggregate;

    @Field(() => CommunicationRecipientMaxAggregate, {nullable:true})
    _max?: CommunicationRecipientMaxAggregate;
}
