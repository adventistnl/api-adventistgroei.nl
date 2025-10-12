import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchClassification } from './church-classification.enum';

@InputType()
export class EnumChurchClassificationFieldUpdateOperationsInput {

    @Field(() => ChurchClassification, {nullable:true})
    set?: `${ChurchClassification}`;
}
