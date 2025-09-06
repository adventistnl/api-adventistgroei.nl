import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommunicationWhereUniqueInput } from './communication-where-unique.input';
import { Type } from 'class-transformer';
import { CommunicationUpdateWithoutInstitutionInput } from './communication-update-without-institution.input';
import { CommunicationCreateWithoutInstitutionInput } from './communication-create-without-institution.input';

@InputType()
export class CommunicationUpsertWithWhereUniqueWithoutInstitutionInput {

    @Field(() => CommunicationWhereUniqueInput, {nullable:false})
    @Type(() => CommunicationWhereUniqueInput)
    where!: Prisma.AtLeast<CommunicationWhereUniqueInput, 'id'>;

    @Field(() => CommunicationUpdateWithoutInstitutionInput, {nullable:false})
    @Type(() => CommunicationUpdateWithoutInstitutionInput)
    update!: CommunicationUpdateWithoutInstitutionInput;

    @Field(() => CommunicationCreateWithoutInstitutionInput, {nullable:false})
    @Type(() => CommunicationCreateWithoutInstitutionInput)
    create!: CommunicationCreateWithoutInstitutionInput;
}
