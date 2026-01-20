import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestPriority } from './subsidy-request-priority.enum';

@InputType()
export class EnumSubsidyRequestPriorityFieldUpdateOperationsInput {

    @Field(() => SubsidyRequestPriority, {nullable:true})
    set?: `${SubsidyRequestPriority}`;
}
