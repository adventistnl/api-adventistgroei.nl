import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RequestType } from './request-type.enum';

@InputType()
export class EnumRequestTypeFieldUpdateOperationsInput {

    @Field(() => RequestType, {nullable:true})
    set?: `${RequestType}`;
}
