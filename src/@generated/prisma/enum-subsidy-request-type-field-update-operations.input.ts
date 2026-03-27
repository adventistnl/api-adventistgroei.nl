import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestType } from './subsidy-request-type.enum';

@InputType()
export class EnumSubsidyRequestTypeFieldUpdateOperationsInput {

    @Field(() => SubsidyRequestType, {nullable:true})
    set?: `${SubsidyRequestType}`;
}
