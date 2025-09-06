import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DirectMessageWhereUniqueInput } from './direct-message-where-unique.input';
import { Type } from 'class-transformer';
import { DirectMessageCreateWithoutInstitutionInput } from './direct-message-create-without-institution.input';

@InputType()
export class DirectMessageCreateOrConnectWithoutInstitutionInput {

    @Field(() => DirectMessageWhereUniqueInput, {nullable:false})
    @Type(() => DirectMessageWhereUniqueInput)
    where!: Prisma.AtLeast<DirectMessageWhereUniqueInput, 'id'>;

    @Field(() => DirectMessageCreateWithoutInstitutionInput, {nullable:false})
    @Type(() => DirectMessageCreateWithoutInstitutionInput)
    create!: DirectMessageCreateWithoutInstitutionInput;
}
