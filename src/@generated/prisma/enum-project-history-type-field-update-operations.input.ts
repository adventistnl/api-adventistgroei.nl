import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectHistoryType } from './project-history-type.enum';

@InputType()
export class EnumProjectHistoryTypeFieldUpdateOperationsInput {

    @Field(() => ProjectHistoryType, {nullable:true})
    set?: `${ProjectHistoryType}`;
}
