import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionWhereInput } from './institution-where.input';
import { Type } from 'class-transformer';
import { InstitutionUpdateWithoutCommunicationsInput } from './institution-update-without-communications.input';

@InputType()
export class InstitutionUpdateToOneWithWhereWithoutCommunicationsInput {

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;

    @Field(() => InstitutionUpdateWithoutCommunicationsInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutCommunicationsInput)
    data!: InstitutionUpdateWithoutCommunicationsInput;
}
