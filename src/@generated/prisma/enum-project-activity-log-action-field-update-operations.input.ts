import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityLogAction } from './project-activity-log-action.enum';

@InputType()
export class EnumProjectActivityLogActionFieldUpdateOperationsInput {

    @Field(() => ProjectActivityLogAction, {nullable:true})
    set?: `${ProjectActivityLogAction}`;
}
