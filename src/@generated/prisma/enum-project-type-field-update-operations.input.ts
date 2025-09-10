import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectType } from './project-type.enum';

@InputType()
export class EnumProjectTypeFieldUpdateOperationsInput {

    @Field(() => ProjectType, {nullable:true})
    set?: `${ProjectType}`;
}
