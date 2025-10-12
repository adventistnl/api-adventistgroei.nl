import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchType } from './church-type.enum';

@InputType()
export class EnumChurchTypeFieldUpdateOperationsInput {

    @Field(() => ChurchType, {nullable:true})
    set?: `${ChurchType}`;
}
