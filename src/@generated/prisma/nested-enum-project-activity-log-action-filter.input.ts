import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityLogAction } from './project-activity-log-action.enum';

@InputType()
export class NestedEnumProjectActivityLogActionFilter {

    @Field(() => ProjectActivityLogAction, {nullable:true})
    equals?: `${ProjectActivityLogAction}`;

    @Field(() => [ProjectActivityLogAction], {nullable:true})
    in?: Array<`${ProjectActivityLogAction}`>;

    @Field(() => [ProjectActivityLogAction], {nullable:true})
    notIn?: Array<`${ProjectActivityLogAction}`>;

    @Field(() => NestedEnumProjectActivityLogActionFilter, {nullable:true})
    not?: NestedEnumProjectActivityLogActionFilter;
}
