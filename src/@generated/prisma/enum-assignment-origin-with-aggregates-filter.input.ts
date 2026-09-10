import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentOrigin } from './assignment-origin.enum';
import { NestedEnumAssignmentOriginWithAggregatesFilter } from './nested-enum-assignment-origin-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAssignmentOriginFilter } from './nested-enum-assignment-origin-filter.input';

@InputType()
export class EnumAssignmentOriginWithAggregatesFilter {

    @Field(() => AssignmentOrigin, {nullable:true})
    equals?: `${AssignmentOrigin}`;

    @Field(() => [AssignmentOrigin], {nullable:true})
    in?: Array<`${AssignmentOrigin}`>;

    @Field(() => [AssignmentOrigin], {nullable:true})
    notIn?: Array<`${AssignmentOrigin}`>;

    @Field(() => NestedEnumAssignmentOriginWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAssignmentOriginWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumAssignmentOriginFilter, {nullable:true})
    _min?: NestedEnumAssignmentOriginFilter;

    @Field(() => NestedEnumAssignmentOriginFilter, {nullable:true})
    _max?: NestedEnumAssignmentOriginFilter;
}
