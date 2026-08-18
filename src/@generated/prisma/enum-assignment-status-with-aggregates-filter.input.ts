import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentStatus } from './assignment-status.enum';
import { NestedEnumAssignmentStatusWithAggregatesFilter } from './nested-enum-assignment-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAssignmentStatusFilter } from './nested-enum-assignment-status-filter.input';

@InputType()
export class EnumAssignmentStatusWithAggregatesFilter {

    @Field(() => AssignmentStatus, {nullable:true})
    equals?: `${AssignmentStatus}`;

    @Field(() => [AssignmentStatus], {nullable:true})
    in?: Array<`${AssignmentStatus}`>;

    @Field(() => [AssignmentStatus], {nullable:true})
    notIn?: Array<`${AssignmentStatus}`>;

    @Field(() => NestedEnumAssignmentStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAssignmentStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumAssignmentStatusFilter, {nullable:true})
    _min?: NestedEnumAssignmentStatusFilter;

    @Field(() => NestedEnumAssignmentStatusFilter, {nullable:true})
    _max?: NestedEnumAssignmentStatusFilter;
}
