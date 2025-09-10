import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectType } from './project-type.enum';
import { NestedEnumProjectTypeFilter } from './nested-enum-project-type-filter.input';

@InputType()
export class EnumProjectTypeFilter {

    @Field(() => ProjectType, {nullable:true})
    equals?: `${ProjectType}`;

    @Field(() => [ProjectType], {nullable:true})
    in?: Array<`${ProjectType}`>;

    @Field(() => [ProjectType], {nullable:true})
    notIn?: Array<`${ProjectType}`>;

    @Field(() => NestedEnumProjectTypeFilter, {nullable:true})
    not?: NestedEnumProjectTypeFilter;
}
