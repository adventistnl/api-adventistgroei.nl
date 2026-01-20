import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchCreateWithoutContactInput } from './church-create-without-contact.input';
import { Type } from 'class-transformer';
import { ChurchCreateOrConnectWithoutContactInput } from './church-create-or-connect-without-contact.input';
import { ChurchCreateManyContactInputEnvelope } from './church-create-many-contact-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';

@InputType()
export class ChurchCreateNestedManyWithoutContactInput {

    @Field(() => [ChurchCreateWithoutContactInput], {nullable:true})
    @Type(() => ChurchCreateWithoutContactInput)
    create?: Array<ChurchCreateWithoutContactInput>;

    @Field(() => [ChurchCreateOrConnectWithoutContactInput], {nullable:true})
    @Type(() => ChurchCreateOrConnectWithoutContactInput)
    connectOrCreate?: Array<ChurchCreateOrConnectWithoutContactInput>;

    @Field(() => ChurchCreateManyContactInputEnvelope, {nullable:true})
    @Type(() => ChurchCreateManyContactInputEnvelope)
    createMany?: ChurchCreateManyContactInputEnvelope;

    @Field(() => [ChurchWhereUniqueInput], {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ChurchWhereUniqueInput, 'id' | 'leader_id'>>;
}
