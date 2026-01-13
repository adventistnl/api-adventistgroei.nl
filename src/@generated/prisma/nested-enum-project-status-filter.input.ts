import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectStatus } from './project-status.enum';

@InputType()
export class NestedEnumProjectStatusFilter {

    @Field(() => ProjectStatus, {nullable:true})
    equals?: `${ProjectStatus}`;

    @Field(() => [ProjectStatus], {nullable:true})
    in?: Array<`${ProjectStatus}`>;

    @Field(() => [ProjectStatus], {nullable:true})
    notIn?: Array<`${ProjectStatus}`>;

    @Field(() => NestedEnumProjectStatusFilter, {nullable:true})
    not?: NestedEnumProjectStatusFilter;
}
