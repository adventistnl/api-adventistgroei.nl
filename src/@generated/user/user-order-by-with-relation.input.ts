import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ContactOrderByWithRelationInput } from '../contact/contact-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { InstitutionOrderByWithRelationInput } from '../institution/institution-order-by-with-relation.input';
import { ChurchOrderByWithRelationInput } from '../church/church-order-by-with-relation.input';
import { DepartmentOrderByWithRelationInput } from '../department/department-order-by-with-relation.input';
import { UserRoleOrderByRelationAggregateInput } from '../user-role/user-role-order-by-relation-aggregate.input';
import { DirectMessageOrderByRelationAggregateInput } from '../direct-message/direct-message-order-by-relation-aggregate.input';
import { DirectMessageRecipientOrderByRelationAggregateInput } from '../direct-message-recipient/direct-message-recipient-order-by-relation-aggregate.input';
import { NotificationOrderByRelationAggregateInput } from '../notification/notification-order-by-relation-aggregate.input';
import { EventRegistrationOrderByRelationAggregateInput } from '../event-registration/event-registration-order-by-relation-aggregate.input';
import { EventRecipientOrderByRelationAggregateInput } from '../event-recipient/event-recipient-order-by-relation-aggregate.input';
import { CommunicationOrderByRelationAggregateInput } from '../communication/communication-order-by-relation-aggregate.input';
import { SubsidyRequestOrderByRelationAggregateInput } from '../subsidy-request/subsidy-request-order-by-relation-aggregate.input';
import { SubsidyStatusOrderByRelationAggregateInput } from '../subsidy-status/subsidy-status-order-by-relation-aggregate.input';
import { VoluntariesOnProjectsOrderByRelationAggregateInput } from '../voluntaries-on-projects/voluntaries-on-projects-order-by-relation-aggregate.input';
import { ProjectOrderByRelationAggregateInput } from '../project/project-order-by-relation-aggregate.input';
import { AnnualBudgetOrderByRelationAggregateInput } from '../annual-budget/annual-budget-order-by-relation-aggregate.input';
import { ProjectActivityLogOrderByRelationAggregateInput } from '../project-activity-log/project-activity-log-order-by-relation-aggregate.input';
import { ProjectActivityAssigneeOrderByRelationAggregateInput } from '../project-activity-assignee/project-activity-assignee-order-by-relation-aggregate.input';
import { SubsidyStatusHistoryOrderByRelationAggregateInput } from '../subsidy-status-history/subsidy-status-history-order-by-relation-aggregate.input';
import { DepartmentOrderByRelationAggregateInput } from '../department/department-order-by-relation-aggregate.input';
import { ProjectHistoryOrderByRelationAggregateInput } from '../project-history/project-history-order-by-relation-aggregate.input';
import { InstitutionPositionOrderByRelationAggregateInput } from '../institution-position/institution-position-order-by-relation-aggregate.input';
import { AvailabilityOrderByRelationAggregateInput } from '../availability/availability-order-by-relation-aggregate.input';
import { AvailabilityRecurrenceRuleOrderByRelationAggregateInput } from '../availability-recurrence-rule/availability-recurrence-rule-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    password?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    gender?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    language_preference?: `${SortOrder}`;

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

    @Field(() => SortOrder, {nullable:true})
    recieve_emails?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    contact_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    institution_id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    church_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    department_id?: SortOrderInput;

    @Field(() => ContactOrderByWithRelationInput, {nullable:true})
    @Type(() => ContactOrderByWithRelationInput)
    contact?: ContactOrderByWithRelationInput;

    @Field(() => InstitutionOrderByWithRelationInput, {nullable:true})
    @Type(() => InstitutionOrderByWithRelationInput)
    institution?: InstitutionOrderByWithRelationInput;

    @Field(() => ChurchOrderByWithRelationInput, {nullable:true})
    @Type(() => ChurchOrderByWithRelationInput)
    church?: ChurchOrderByWithRelationInput;

    @Field(() => DepartmentOrderByWithRelationInput, {nullable:true})
    @Type(() => DepartmentOrderByWithRelationInput)
    department?: DepartmentOrderByWithRelationInput;

    @Field(() => UserRoleOrderByRelationAggregateInput, {nullable:true})
    user_roles?: UserRoleOrderByRelationAggregateInput;

    @Field(() => DirectMessageOrderByRelationAggregateInput, {nullable:true})
    direct_messages?: DirectMessageOrderByRelationAggregateInput;

    @Field(() => DirectMessageRecipientOrderByRelationAggregateInput, {nullable:true})
    direct_message_recipients?: DirectMessageRecipientOrderByRelationAggregateInput;

    @Field(() => NotificationOrderByRelationAggregateInput, {nullable:true})
    @Type(() => NotificationOrderByRelationAggregateInput)
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

    @Field(() => VoluntariesOnProjectsOrderByRelationAggregateInput, {nullable:true})
    @Type(() => VoluntariesOnProjectsOrderByRelationAggregateInput)
    voluntary_projects?: VoluntariesOnProjectsOrderByRelationAggregateInput;

    @Field(() => ProjectOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ProjectOrderByRelationAggregateInput)
    Project?: ProjectOrderByRelationAggregateInput;

    @Field(() => ProjectOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ProjectOrderByRelationAggregateInput)
    co_owned_projects?: ProjectOrderByRelationAggregateInput;

    @Field(() => AnnualBudgetOrderByRelationAggregateInput, {nullable:true})
    @Type(() => AnnualBudgetOrderByRelationAggregateInput)
    approved_annual_budgets?: AnnualBudgetOrderByRelationAggregateInput;

    @Field(() => ProjectActivityLogOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ProjectActivityLogOrderByRelationAggregateInput)
    project_activity_logs?: ProjectActivityLogOrderByRelationAggregateInput;

    @Field(() => ProjectActivityAssigneeOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ProjectActivityAssigneeOrderByRelationAggregateInput)
    activity_assignments?: ProjectActivityAssigneeOrderByRelationAggregateInput;

    @Field(() => SubsidyStatusHistoryOrderByRelationAggregateInput, {nullable:true})
    @Type(() => SubsidyStatusHistoryOrderByRelationAggregateInput)
    subsidy_status_history?: SubsidyStatusHistoryOrderByRelationAggregateInput;

    @Field(() => DepartmentOrderByRelationAggregateInput, {nullable:true})
    @Type(() => DepartmentOrderByRelationAggregateInput)
    led_departments?: DepartmentOrderByRelationAggregateInput;

    @Field(() => ChurchOrderByWithRelationInput, {nullable:true})
    @Type(() => ChurchOrderByWithRelationInput)
    led_church?: ChurchOrderByWithRelationInput;

    @Field(() => ProjectHistoryOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ProjectHistoryOrderByRelationAggregateInput)
    project_history?: ProjectHistoryOrderByRelationAggregateInput;

    @Field(() => InstitutionPositionOrderByRelationAggregateInput, {nullable:true})
    institution_positions?: InstitutionPositionOrderByRelationAggregateInput;

    @Field(() => AvailabilityOrderByRelationAggregateInput, {nullable:true})
    availabilities?: AvailabilityOrderByRelationAggregateInput;

    @Field(() => AvailabilityRecurrenceRuleOrderByRelationAggregateInput, {nullable:true})
    availability_recurrence_rules?: AvailabilityRecurrenceRuleOrderByRelationAggregateInput;
}
