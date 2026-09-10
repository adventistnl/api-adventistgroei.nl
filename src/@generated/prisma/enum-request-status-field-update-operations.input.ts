import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RequestStatus } from './request-status.enum';

@InputType()
export class EnumRequestStatusFieldUpdateOperationsInput {

    @Field(() => RequestStatus, {nullable:true})
    set?: `${RequestStatus}`;
}
