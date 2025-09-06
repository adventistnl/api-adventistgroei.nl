import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutCommunicationsInput } from './institution-create-without-communications.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutCommunicationsInput } from './institution-create-or-connect-without-communications.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';

@InputType()
export class InstitutionCreateNestedOneWithoutCommunicationsInput {

    @Field(() => InstitutionCreateWithoutCommunicationsInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutCommunicationsInput)
    create?: InstitutionCreateWithoutCommunicationsInput;

    @Field(() => InstitutionCreateOrConnectWithoutCommunicationsInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutCommunicationsInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutCommunicationsInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;
}
