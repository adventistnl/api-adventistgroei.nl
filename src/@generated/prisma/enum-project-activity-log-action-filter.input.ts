import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityLogAction } from './project-activity-log-action.enum';
import { NestedEnumProjectActivityLogActionFilter } from './nested-enum-project-activity-log-action-filter.input';

@InputType()
export class EnumProjectActivityLogActionFilter {

    @Field(() => ProjectActivityLogAction, {nullable:true})
    equals?: `${ProjectActivityLogAction}`;

    @Field(() => [ProjectActivityLogAction], {nullable:true})
    in?: Array<`${ProjectActivityLogAction}`>;

    @Field(() => [ProjectActivityLogAction], {nullable:true})
    notIn?: Array<`${ProjectActivityLogAction}`>;

    @Field(() => NestedEnumProjectActivityLogActionFilter, {nullable:true})
    not?: NestedEnumProjectActivityLogActionFilter;
}
