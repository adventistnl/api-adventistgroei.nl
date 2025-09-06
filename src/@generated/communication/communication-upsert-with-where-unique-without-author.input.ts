import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommunicationWhereUniqueInput } from './communication-where-unique.input';
import { Type } from 'class-transformer';
import { CommunicationUpdateWithoutAuthorInput } from './communication-update-without-author.input';
import { CommunicationCreateWithoutAuthorInput } from './communication-create-without-author.input';

@InputType()
export class CommunicationUpsertWithWhereUniqueWithoutAuthorInput {

    @Field(() => CommunicationWhereUniqueInput, {nullable:false})
    @Type(() => CommunicationWhereUniqueInput)
    where!: Prisma.AtLeast<CommunicationWhereUniqueInput, 'id'>;

    @Field(() => CommunicationUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => CommunicationUpdateWithoutAuthorInput)
    update!: CommunicationUpdateWithoutAuthorInput;

    @Field(() => CommunicationCreateWithoutAuthorInput, {nullable:false})
    @Type(() => CommunicationCreateWithoutAuthorInput)
    create!: CommunicationCreateWithoutAuthorInput;
}
