import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumProjectType } from './enum-project-type.enum';

@InputType()
export class EnumEnumProjectTypeFieldUpdateOperationsInput {

    @Field(() => EnumProjectType, {nullable:true})
    set?: `${EnumProjectType}`;
}
