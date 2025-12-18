import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityStatus } from './activity-status.enum';

@InputType()
export class EnumActivityStatusFieldUpdateOperationsInput {

    @Field(() => ActivityStatus, {nullable:true})
    set?: `${ActivityStatus}`;
}
