import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ContactOrderByWithRelationInput } from '../contact/contact-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { AnnualBudgetOrderByWithRelationInput } from '../annual-budget/annual-budget-order-by-with-relation.input';
import { RegionOrderByRelationAggregateInput } from '../region/region-order-by-relation-aggregate.input';
import { ChurchOrderByRelationAggregateInput } from '../church/church-order-by-relation-aggregate.input';
import { DepartmentOrderByRelationAggregateInput } from '../department/department-order-by-relation-aggregate.input';
import { UserOrderByRelationAggregateInput } from '../user/user-order-by-relation-aggregate.input';
import { CommunicationOrderByRelationAggregateInput } from '../communication/communication-order-by-relation-aggregate.input';
import { NotificationOrderByRelationAggregateInput } from '../notification/notification-order-by-relation-aggregate.input';
import { SettingOrderByRelationAggregateInput } from '../setting/setting-order-by-relation-aggregate.input';
import { ProjectOrderByRelationAggregateInput } from '../project/project-order-by-relation-aggregate.input';
import { DirectMessageOrderByRelationAggregateInput } from '../direct-message/direct-message-order-by-relation-aggregate.input';
import { SubsidyRequestOrderByRelationAggregateInput } from '../subsidy-request/subsidy-request-order-by-relation-aggregate.input';

@InputType()
export class InstitutionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    denomination?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    language_preference?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    contact_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    annual_budget_id?: SortOrderInput;

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

    @Field(() => AnnualBudgetOrderByWithRelationInput, {nullable:true})
    @Type(() => AnnualBudgetOrderByWithRelationInput)
    annual_budget?: AnnualBudgetOrderByWithRelationInput;

    @Field(() => RegionOrderByRelationAggregateInput, {nullable:true})
    @Type(() => RegionOrderByRelationAggregateInput)
    regions?: RegionOrderByRelationAggregateInput;

    @Field(() => ChurchOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ChurchOrderByRelationAggregateInput)
    churches?: ChurchOrderByRelationAggregateInput;

    @Field(() => DepartmentOrderByRelationAggregateInput, {nullable:true})
    @Type(() => DepartmentOrderByRelationAggregateInput)
    departments?: DepartmentOrderByRelationAggregateInput;

    @Field(() => UserOrderByRelationAggregateInput, {nullable:true})
    @Type(() => UserOrderByRelationAggregateInput)
    users?: UserOrderByRelationAggregateInput;

    @Field(() => CommunicationOrderByRelationAggregateInput, {nullable:true})
    communications?: CommunicationOrderByRelationAggregateInput;

    @Field(() => NotificationOrderByRelationAggregateInput, {nullable:true})
    notifications?: NotificationOrderByRelationAggregateInput;

    @Field(() => SettingOrderByRelationAggregateInput, {nullable:true})
    settings?: SettingOrderByRelationAggregateInput;

    @Field(() => ProjectOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ProjectOrderByRelationAggregateInput)
    projects?: ProjectOrderByRelationAggregateInput;

    @Field(() => DirectMessageOrderByRelationAggregateInput, {nullable:true})
    direct_messages?: DirectMessageOrderByRelationAggregateInput;

    @Field(() => SubsidyRequestOrderByRelationAggregateInput, {nullable:true})
    @Type(() => SubsidyRequestOrderByRelationAggregateInput)
    subsidy_requests?: SubsidyRequestOrderByRelationAggregateInput;
}
