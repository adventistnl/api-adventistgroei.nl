import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransferType } from './transfer-type.enum';

@InputType()
export class EnumTransferTypeFieldUpdateOperationsInput {

    @Field(() => TransferType, {nullable:true})
    set?: `${TransferType}`;
}
