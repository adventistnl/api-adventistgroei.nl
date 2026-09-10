import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RequestStatus } from './request-status.enum';

@InputType()
export class NestedEnumRequestStatusFilter {

    @Field(() => RequestStatus, {nullable:true})
    equals?: `${RequestStatus}`;

    @Field(() => [RequestStatus], {nullable:true})
    in?: Array<`${RequestStatus}`>;

    @Field(() => [RequestStatus], {nullable:true})
    notIn?: Array<`${RequestStatus}`>;

    @Field(() => NestedEnumRequestStatusFilter, {nullable:true})
    not?: NestedEnumRequestStatusFilter;
}
