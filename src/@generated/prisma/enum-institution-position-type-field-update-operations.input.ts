import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionPositionType } from './institution-position-type.enum';

@InputType()
export class EnumInstitutionPositionTypeFieldUpdateOperationsInput {

    @Field(() => InstitutionPositionType, {nullable:true})
    set?: `${InstitutionPositionType}`;
}
