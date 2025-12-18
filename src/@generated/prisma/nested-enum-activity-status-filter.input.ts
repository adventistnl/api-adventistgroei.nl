import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityStatus } from './activity-status.enum';

@InputType()
export class NestedEnumActivityStatusFilter {

    @Field(() => ActivityStatus, {nullable:true})
    equals?: `${ActivityStatus}`;

    @Field(() => [ActivityStatus], {nullable:true})
    in?: Array<`${ActivityStatus}`>;

    @Field(() => [ActivityStatus], {nullable:true})
    notIn?: Array<`${ActivityStatus}`>;

    @Field(() => NestedEnumActivityStatusFilter, {nullable:true})
    not?: NestedEnumActivityStatusFilter;
}
