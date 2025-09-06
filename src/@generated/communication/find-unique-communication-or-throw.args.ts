import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommunicationWhereUniqueInput } from './communication-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueCommunicationOrThrowArgs {

    @Field(() => CommunicationWhereUniqueInput, {nullable:false})
    @Type(() => CommunicationWhereUniqueInput)
    where!: Prisma.AtLeast<CommunicationWhereUniqueInput, 'id'>;
}
