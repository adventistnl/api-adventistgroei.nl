import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunicationCreateWithoutAuthorInput } from './communication-create-without-author.input';
import { Type } from 'class-transformer';
import { CommunicationCreateOrConnectWithoutAuthorInput } from './communication-create-or-connect-without-author.input';
import { CommunicationCreateManyAuthorInputEnvelope } from './communication-create-many-author-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommunicationWhereUniqueInput } from './communication-where-unique.input';

@InputType()
export class CommunicationUncheckedCreateNestedManyWithoutAuthorInput {

    @Field(() => [CommunicationCreateWithoutAuthorInput], {nullable:true})
    @Type(() => CommunicationCreateWithoutAuthorInput)
    create?: Array<CommunicationCreateWithoutAuthorInput>;

    @Field(() => [CommunicationCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => CommunicationCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<CommunicationCreateOrConnectWithoutAuthorInput>;

    @Field(() => CommunicationCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => CommunicationCreateManyAuthorInputEnvelope)
    createMany?: CommunicationCreateManyAuthorInputEnvelope;

    @Field(() => [CommunicationWhereUniqueInput], {nullable:true})
    @Type(() => CommunicationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommunicationWhereUniqueInput, 'id'>>;
}
