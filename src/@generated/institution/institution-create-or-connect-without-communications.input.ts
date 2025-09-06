import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutCommunicationsInput } from './institution-create-without-communications.input';

@InputType()
export class InstitutionCreateOrConnectWithoutCommunicationsInput {

    @Field(() => InstitutionWhereUniqueInput, {nullable:false})
    @Type(() => InstitutionWhereUniqueInput)
    where!: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionCreateWithoutCommunicationsInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutCommunicationsInput)
    create!: InstitutionCreateWithoutCommunicationsInput;
}
