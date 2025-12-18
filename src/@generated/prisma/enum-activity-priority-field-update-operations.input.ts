import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityPriority } from './activity-priority.enum';

@InputType()
export class EnumActivityPriorityFieldUpdateOperationsInput {

    @Field(() => ActivityPriority, {nullable:true})
    set?: `${ActivityPriority}`;
}
