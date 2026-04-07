import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransferType } from './transfer-type.enum';
import { NestedEnumTransferTypeWithAggregatesFilter } from './nested-enum-transfer-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumTransferTypeFilter } from './nested-enum-transfer-type-filter.input';

@InputType()
export class EnumTransferTypeWithAggregatesFilter {

    @Field(() => TransferType, {nullable:true})
    equals?: `${TransferType}`;

    @Field(() => [TransferType], {nullable:true})
    in?: Array<`${TransferType}`>;

    @Field(() => [TransferType], {nullable:true})
    notIn?: Array<`${TransferType}`>;

    @Field(() => NestedEnumTransferTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumTransferTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumTransferTypeFilter, {nullable:true})
    _min?: NestedEnumTransferTypeFilter;

    @Field(() => NestedEnumTransferTypeFilter, {nullable:true})
    _max?: NestedEnumTransferTypeFilter;
}
