import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityStatus } from './availability-status.enum';

@InputType()
export class EnumAvailabilityStatusFieldUpdateOperationsInput {

    @Field(() => AvailabilityStatus, {nullable:true})
    set?: `${AvailabilityStatus}`;
}
