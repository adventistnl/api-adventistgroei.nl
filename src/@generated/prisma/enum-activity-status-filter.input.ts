import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityStatus } from './activity-status.enum';
import { NestedEnumActivityStatusFilter } from './nested-enum-activity-status-filter.input';

@InputType()
export class EnumActivityStatusFilter {

    @Field(() => ActivityStatus, {nullable:true})
    equals?: `${ActivityStatus}`;

    @Field(() => [ActivityStatus], {nullable:true})
    in?: Array<`${ActivityStatus}`>;

    @Field(() => [ActivityStatus], {nullable:true})
    notIn?: Array<`${ActivityStatus}`>;

    @Field(() => NestedEnumActivityStatusFilter, {nullable:true})
    not?: NestedEnumActivityStatusFilter;
}
