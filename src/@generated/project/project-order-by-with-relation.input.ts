import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DepartmentOrderByWithRelationInput } from '../department/department-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { EventOrderByWithRelationInput } from '../event/event-order-by-with-relation.input';
import { InstitutionOrderByWithRelationInput } from '../institution/institution-order-by-with-relation.input';
import { VoluntariesOnProjectsOrderByRelationAggregateInput } from '../voluntaries-on-projects/voluntaries-on-projects-order-by-relation-aggregate.input';
import { ProjectActivityOrderByRelationAggregateInput } from '../project-activity/project-activity-order-by-relation-aggregate.input';
import { SubsidyRequestOrderByRelationAggregateInput } from '../subsidy-request/subsidy-request-order-by-relation-aggregate.input';

@InputType()
export class ProjectOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    department_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    budget?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    media_link?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    owner_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    language_preference?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

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

    @Field(() => SortOrderInput, {nullable:true})
    event_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    institution_id?: SortOrderInput;

    @Field(() => DepartmentOrderByWithRelationInput, {nullable:true})
    @Type(() => DepartmentOrderByWithRelationInput)
    department?: DepartmentOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    owner?: UserOrderByWithRelationInput;

    @Field(() => EventOrderByWithRelationInput, {nullable:true})
    @Type(() => EventOrderByWithRelationInput)
    event?: EventOrderByWithRelationInput;

    @Field(() => InstitutionOrderByWithRelationInput, {nullable:true})
    @Type(() => InstitutionOrderByWithRelationInput)
    Institution?: InstitutionOrderByWithRelationInput;

    @Field(() => VoluntariesOnProjectsOrderByRelationAggregateInput, {nullable:true})
    @Type(() => VoluntariesOnProjectsOrderByRelationAggregateInput)
    voluntary_users?: VoluntariesOnProjectsOrderByRelationAggregateInput;

    @Field(() => ProjectActivityOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ProjectActivityOrderByRelationAggregateInput)
    activities?: ProjectActivityOrderByRelationAggregateInput;

    @Field(() => SubsidyRequestOrderByRelationAggregateInput, {nullable:true})
    @Type(() => SubsidyRequestOrderByRelationAggregateInput)
    subsidies?: SubsidyRequestOrderByRelationAggregateInput;
}
