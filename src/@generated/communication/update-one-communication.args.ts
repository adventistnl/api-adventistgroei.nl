import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommunicationUpdateInput } from './communication-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CommunicationWhereUniqueInput } from './communication-where-unique.input';

@ArgsType()
export class UpdateOneCommunicationArgs {

    @Field(() => CommunicationUpdateInput, {nullable:false})
    @Type(() => CommunicationUpdateInput)
    data!: CommunicationUpdateInput;

    @Field(() => CommunicationWhereUniqueInput, {nullable:false})
    @Type(() => CommunicationWhereUniqueInput)
    where!: Prisma.AtLeast<CommunicationWhereUniqueInput, 'id'>;
}
