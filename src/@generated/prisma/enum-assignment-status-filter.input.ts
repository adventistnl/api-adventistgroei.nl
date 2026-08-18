import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentStatus } from './assignment-status.enum';
import { NestedEnumAssignmentStatusFilter } from './nested-enum-assignment-status-filter.input';

@InputType()
export class EnumAssignmentStatusFilter {

    @Field(() => AssignmentStatus, {nullable:true})
    equals?: `${AssignmentStatus}`;

    @Field(() => [AssignmentStatus], {nullable:true})
    in?: Array<`${AssignmentStatus}`>;

    @Field(() => [AssignmentStatus], {nullable:true})
    notIn?: Array<`${AssignmentStatus}`>;

    @Field(() => NestedEnumAssignmentStatusFilter, {nullable:true})
    not?: NestedEnumAssignmentStatusFilter;
}
