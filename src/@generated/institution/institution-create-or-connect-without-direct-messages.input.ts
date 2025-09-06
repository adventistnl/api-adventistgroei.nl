import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutDirect_messagesInput } from './institution-create-without-direct-messages.input';

@InputType()
export class InstitutionCreateOrConnectWithoutDirect_messagesInput {

    @Field(() => InstitutionWhereUniqueInput, {nullable:false})
    @Type(() => InstitutionWhereUniqueInput)
    where!: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionCreateWithoutDirect_messagesInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutDirect_messagesInput)
    create!: InstitutionCreateWithoutDirect_messagesInput;
}
