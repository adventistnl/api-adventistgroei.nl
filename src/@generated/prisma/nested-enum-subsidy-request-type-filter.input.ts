import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestType } from './subsidy-request-type.enum';

@InputType()
export class NestedEnumSubsidyRequestTypeFilter {

    @Field(() => SubsidyRequestType, {nullable:true})
    equals?: `${SubsidyRequestType}`;

    @Field(() => [SubsidyRequestType], {nullable:true})
    in?: Array<`${SubsidyRequestType}`>;

    @Field(() => [SubsidyRequestType], {nullable:true})
    notIn?: Array<`${SubsidyRequestType}`>;

    @Field(() => NestedEnumSubsidyRequestTypeFilter, {nullable:true})
    not?: NestedEnumSubsidyRequestTypeFilter;
}
