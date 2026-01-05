import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyHistoryType } from './subsidy-history-type.enum';

@InputType()
export class EnumSubsidyHistoryTypeFieldUpdateOperationsInput {

    @Field(() => SubsidyHistoryType, {nullable:true})
    set?: `${SubsidyHistoryType}`;
}
