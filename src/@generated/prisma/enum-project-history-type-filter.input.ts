import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectHistoryType } from './project-history-type.enum';
import { NestedEnumProjectHistoryTypeFilter } from './nested-enum-project-history-type-filter.input';

@InputType()
export class EnumProjectHistoryTypeFilter {

    @Field(() => ProjectHistoryType, {nullable:true})
    equals?: `${ProjectHistoryType}`;

    @Field(() => [ProjectHistoryType], {nullable:true})
    in?: Array<`${ProjectHistoryType}`>;

    @Field(() => [ProjectHistoryType], {nullable:true})
    notIn?: Array<`${ProjectHistoryType}`>;

    @Field(() => NestedEnumProjectHistoryTypeFilter, {nullable:true})
    not?: NestedEnumProjectHistoryTypeFilter;
}
