import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdjustmentStatus } from './adjustment-status.enum';

@InputType()
export class EnumAdjustmentStatusFieldUpdateOperationsInput {

    @Field(() => AdjustmentStatus, {nullable:true})
    set?: `${AdjustmentStatus}`;
}
