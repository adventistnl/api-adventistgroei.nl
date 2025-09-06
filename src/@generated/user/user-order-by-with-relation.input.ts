import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { InstitutionOrderByWithRelationInput } from '../institution/institution-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { ChurchOrderByWithRelationInput } from '../church/church-order-by-with-relation.input';
import { ContactOrderByWithRelationInput } from '../contact/contact-order-by-with-relation.input';
import { UserRoleOrderByRelationAggregateInput } from '../user-role/user-role-order-by-relation-aggregate.input';
import { DirectMessageOrderByRelationAggregateInput } from '../direct-message/direct-message-order-by-relation-aggregate.input';
import { DirectMessageRecipientOrderByRelationAggregateInput } from '../direct-message-recipient/direct-message-recipient-order-by-relation-aggregate.input';
import { NotificationOrderByRelationAggregateInput } from '../notification/notification-order-by-relation-aggregate.input';
import { EventRegistrationOrderByRelationAggregateInput } from '../event-registration/event-registration-order-by-relation-aggregate.input';
import { EventRecipientOrderByRelationAggregateInput } from '../event-recipient/event-recipient-order-by-relation-aggregate.input';
import { CommunicationOrderByRelationAggregateInput } from '../communication/communication-order-by-relation-aggregate.input';
import { SubsidyRequestOrderByRelationAggregateInput } from '../subsidy-request/subsidy-request-order-by-relation-aggregate.input';
import { SubsidyStatusOrderByRelationAggregateInput } from '../subsidy-status/subsidy-status-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    institution_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    church_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    password?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    language_preference?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    contact_id?: SortOrderInput;

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

    @Field(() => InstitutionOrderByWithRelationInput, {nullable:true})
    @Type(() => InstitutionOrderByWithRelationInput)
    institution?: InstitutionOrderByWithRelationInput;

    @Field(() => ChurchOrderByWithRelationInput, {nullable:true})
    @Type(() => ChurchOrderByWithRelationInput)
    church?: ChurchOrderByWithRelationInput;

    @Field(() => ContactOrderByWithRelationInput, {nullable:true})
    @Type(() => ContactOrderByWithRelationInput)
    contact?: ContactOrderByWithRelationInput;

    @Field(() => UserRoleOrderByRelationAggregateInput, {nullable:true})
    user_roles?: UserRoleOrderByRelationAggregateInput;

    @Field(() => DirectMessageOrderByRelationAggregateInput, {nullable:true})
    direct_messages?: DirectMessageOrderByRelationAggregateInput;

    @Field(() => DirectMessageRecipientOrderByRelationAggregateInput, {nullable:true})
    direct_message_recipients?: DirectMessageRecipientOrderByRelationAggregateInput;

    @Field(() => NotificationOrderByRelationAggregateInput, {nullable:true})
    notifications?: NotificationOrderByRelationAggregateInput;

    @Field(() => EventRegistrationOrderByRelationAggregateInput, {nullable:true})
    @Type(() => EventRegistrationOrderByRelationAggregateInput)
    event_registrations?: EventRegistrationOrderByRelationAggregateInput;

    @Field(() => EventRecipientOrderByRelationAggregateInput, {nullable:true})
    @Type(() => EventRecipientOrderByRelationAggregateInput)
    event_recipients?: EventRecipientOrderByRelationAggregateInput;

    @Field(() => CommunicationOrderByRelationAggregateInput, {nullable:true})
    communications?: CommunicationOrderByRelationAggregateInput;

    @Field(() => SubsidyRequestOrderByRelationAggregateInput, {nullable:true})
    @Type(() => SubsidyRequestOrderByRelationAggregateInput)
    SubsidyRequest?: SubsidyRequestOrderByRelationAggregateInput;

    @Field(() => SubsidyStatusOrderByRelationAggregateInput, {nullable:true})
    @Type(() => SubsidyStatusOrderByRelationAggregateInput)
    SubsidyStatus?: SubsidyStatusOrderByRelationAggregateInput;
}
