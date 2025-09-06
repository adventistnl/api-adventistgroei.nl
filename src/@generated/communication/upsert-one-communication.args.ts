import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommunicationWhereUniqueInput } from './communication-where-unique.input';
import { Type } from 'class-transformer';
import { CommunicationCreateInput } from './communication-create.input';
import { CommunicationUpdateInput } from './communication-update.input';

@ArgsType()
export class UpsertOneCommunicationArgs {

    @Field(() => CommunicationWhereUniqueInput, {nullable:false})
    @Type(() => CommunicationWhereUniqueInput)
    where!: Prisma.AtLeast<CommunicationWhereUniqueInput, 'id'>;

    @Field(() => CommunicationCreateInput, {nullable:false})
    @Type(() => CommunicationCreateInput)
    create!: CommunicationCreateInput;

    @Field(() => CommunicationUpdateInput, {nullable:false})
    @Type(() => CommunicationUpdateInput)
    update!: CommunicationUpdateInput;
}
