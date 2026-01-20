import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectStatus } from './project-status.enum';

@InputType()
export class EnumProjectStatusFieldUpdateOperationsInput {

    @Field(() => ProjectStatus, {nullable:true})
    set?: `${ProjectStatus}`;
}
