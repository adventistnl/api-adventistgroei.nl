import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilitySource } from './availability-source.enum';

@InputType()
export class EnumAvailabilitySourceFieldUpdateOperationsInput {

    @Field(() => AvailabilitySource, {nullable:true})
    set?: `${AvailabilitySource}`;
}
