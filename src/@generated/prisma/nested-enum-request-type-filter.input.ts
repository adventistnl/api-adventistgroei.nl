import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RequestType } from './request-type.enum';

@InputType()
export class NestedEnumRequestTypeFilter {

    @Field(() => RequestType, {nullable:true})
    equals?: `${RequestType}`;

    @Field(() => [RequestType], {nullable:true})
    in?: Array<`${RequestType}`>;

    @Field(() => [RequestType], {nullable:true})
    notIn?: Array<`${RequestType}`>;

    @Field(() => NestedEnumRequestTypeFilter, {nullable:true})
    not?: NestedEnumRequestTypeFilter;
}
