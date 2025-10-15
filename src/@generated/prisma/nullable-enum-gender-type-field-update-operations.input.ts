import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenderType } from './gender-type.enum';

@InputType()
export class NullableEnumGenderTypeFieldUpdateOperationsInput {

    @Field(() => GenderType, {nullable:true})
    set?: `${GenderType}`;
}
