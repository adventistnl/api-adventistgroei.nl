import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionUpdateWithoutCommunicationsInput } from './institution-update-without-communications.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutCommunicationsInput } from './institution-create-without-communications.input';
import { InstitutionWhereInput } from './institution-where.input';

@InputType()
export class InstitutionUpsertWithoutCommunicationsInput {

    @Field(() => InstitutionUpdateWithoutCommunicationsInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutCommunicationsInput)
    update!: InstitutionUpdateWithoutCommunicationsInput;

    @Field(() => InstitutionCreateWithoutCommunicationsInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutCommunicationsInput)
    create!: InstitutionCreateWithoutCommunicationsInput;

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;
}
