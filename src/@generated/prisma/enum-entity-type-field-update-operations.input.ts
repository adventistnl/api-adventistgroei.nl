import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EntityType } from './entity-type.enum';

@InputType()
export class EnumEntityTypeFieldUpdateOperationsInput {

    @Field(() => EntityType, {nullable:true})
    set?: `${EntityType}`;
}
