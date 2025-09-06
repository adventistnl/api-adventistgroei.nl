import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ContactOrderByWithRelationInput } from '../contact/contact-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { EventRecipientOrderByRelationAggregateInput } from '../event-recipient/event-recipient-order-by-relation-aggregate.input';
import { EventRegistrationOrderByRelationAggregateInput } from '../event-registration/event-registration-order-by-relation-aggregate.input';

@InputType()
export class EventOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    target_type?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    target_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    contact_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    language_preference?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    max_participants?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    ticket_amount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    subscription_expires_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_by?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_deleted?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    deleted_at?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    deleted_by?: SortOrderInput;

    @Field(() => ContactOrderByWithRelationInput, {nullable:true})
    @Type(() => ContactOrderByWithRelationInput)
    contact?: ContactOrderByWithRelationInput;

    @Field(() => EventRecipientOrderByRelationAggregateInput, {nullable:true})
    @Type(() => EventRecipientOrderByRelationAggregateInput)
    event_recipients?: EventRecipientOrderByRelationAggregateInput;

    @Field(() => EventRegistrationOrderByRelationAggregateInput, {nullable:true})
    @Type(() => EventRegistrationOrderByRelationAggregateInput)
    event_registrations?: EventRegistrationOrderByRelationAggregateInput;
}
