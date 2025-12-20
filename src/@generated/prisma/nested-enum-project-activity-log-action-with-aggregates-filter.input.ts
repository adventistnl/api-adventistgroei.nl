import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityLogAction } from './project-activity-log-action.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumProjectActivityLogActionFilter } from './nested-enum-project-activity-log-action-filter.input';

@InputType()
export class NestedEnumProjectActivityLogActionWithAggregatesFilter {

    @Field(() => ProjectActivityLogAction, {nullable:true})
    equals?: `${ProjectActivityLogAction}`;

    @Field(() => [ProjectActivityLogAction], {nullable:true})
    in?: Array<`${ProjectActivityLogAction}`>;

    @Field(() => [ProjectActivityLogAction], {nullable:true})
    notIn?: Array<`${ProjectActivityLogAction}`>;

    @Field(() => NestedEnumProjectActivityLogActionWithAggregatesFilter, {nullable:true})
    not?: NestedEnumProjectActivityLogActionWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumProjectActivityLogActionFilter, {nullable:true})
    _min?: NestedEnumProjectActivityLogActionFilter;

    @Field(() => NestedEnumProjectActivityLogActionFilter, {nullable:true})
    _max?: NestedEnumProjectActivityLogActionFilter;
}
