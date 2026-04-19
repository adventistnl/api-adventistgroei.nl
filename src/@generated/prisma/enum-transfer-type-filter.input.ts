import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransferType } from './transfer-type.enum';
import { NestedEnumTransferTypeFilter } from './nested-enum-transfer-type-filter.input';

@InputType()
export class EnumTransferTypeFilter {

    @Field(() => TransferType, {nullable:true})
    equals?: `${TransferType}`;

    @Field(() => [TransferType], {nullable:true})
    in?: Array<`${TransferType}`>;

    @Field(() => [TransferType], {nullable:true})
    notIn?: Array<`${TransferType}`>;

    @Field(() => NestedEnumTransferTypeFilter, {nullable:true})
    not?: NestedEnumTransferTypeFilter;
}
