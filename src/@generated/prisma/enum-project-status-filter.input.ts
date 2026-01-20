import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectStatus } from './project-status.enum';
import { NestedEnumProjectStatusFilter } from './nested-enum-project-status-filter.input';

@InputType()
export class EnumProjectStatusFilter {

    @Field(() => ProjectStatus, {nullable:true})
    equals?: `${ProjectStatus}`;

    @Field(() => [ProjectStatus], {nullable:true})
    in?: Array<`${ProjectStatus}`>;

    @Field(() => [ProjectStatus], {nullable:true})
    notIn?: Array<`${ProjectStatus}`>;

    @Field(() => NestedEnumProjectStatusFilter, {nullable:true})
    not?: NestedEnumProjectStatusFilter;
}
