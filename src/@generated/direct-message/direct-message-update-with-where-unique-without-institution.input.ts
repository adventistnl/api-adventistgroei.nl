import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DirectMessageWhereUniqueInput } from './direct-message-where-unique.input';
import { Type } from 'class-transformer';
import { DirectMessageUpdateWithoutInstitutionInput } from './direct-message-update-without-institution.input';

@InputType()
export class DirectMessageUpdateWithWhereUniqueWithoutInstitutionInput {

    @Field(() => DirectMessageWhereUniqueInput, {nullable:false})
    @Type(() => DirectMessageWhereUniqueInput)
    where!: Prisma.AtLeast<DirectMessageWhereUniqueInput, 'id'>;

    @Field(() => DirectMessageUpdateWithoutInstitutionInput, {nullable:false})
    @Type(() => DirectMessageUpdateWithoutInstitutionInput)
    data!: DirectMessageUpdateWithoutInstitutionInput;
}
