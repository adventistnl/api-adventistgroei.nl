import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchCreateWithoutContactInput } from './church-create-without-contact.input';
import { Type } from 'class-transformer';
import { ChurchCreateOrConnectWithoutContactInput } from './church-create-or-connect-without-contact.input';
import { ChurchUpsertWithWhereUniqueWithoutContactInput } from './church-upsert-with-where-unique-without-contact.input';
import { ChurchCreateManyContactInputEnvelope } from './church-create-many-contact-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';
import { ChurchUpdateWithWhereUniqueWithoutContactInput } from './church-update-with-where-unique-without-contact.input';
import { ChurchUpdateManyWithWhereWithoutContactInput } from './church-update-many-with-where-without-contact.input';
import { ChurchScalarWhereInput } from './church-scalar-where.input';

@InputType()
export class ChurchUncheckedUpdateManyWithoutContactNestedInput {

    @Field(() => [ChurchCreateWithoutContactInput], {nullable:true})
    @Type(() => ChurchCreateWithoutContactInput)
    create?: Array<ChurchCreateWithoutContactInput>;

    @Field(() => [ChurchCreateOrConnectWithoutContactInput], {nullable:true})
    @Type(() => ChurchCreateOrConnectWithoutContactInput)
    connectOrCreate?: Array<ChurchCreateOrConnectWithoutContactInput>;

    @Field(() => [ChurchUpsertWithWhereUniqueWithoutContactInput], {nullable:true})
    @Type(() => ChurchUpsertWithWhereUniqueWithoutContactInput)
    upsert?: Array<ChurchUpsertWithWhereUniqueWithoutContactInput>;

    @Field(() => ChurchCreateManyContactInputEnvelope, {nullable:true})
    @Type(() => ChurchCreateManyContactInputEnvelope)
    createMany?: ChurchCreateManyContactInputEnvelope;

    @Field(() => [ChurchWhereUniqueInput], {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ChurchWhereUniqueInput, 'id'>>;

    @Field(() => [ChurchWhereUniqueInput], {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ChurchWhereUniqueInput, 'id'>>;

    @Field(() => [ChurchWhereUniqueInput], {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ChurchWhereUniqueInput, 'id'>>;

    @Field(() => [ChurchWhereUniqueInput], {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ChurchWhereUniqueInput, 'id'>>;

    @Field(() => [ChurchUpdateWithWhereUniqueWithoutContactInput], {nullable:true})
    @Type(() => ChurchUpdateWithWhereUniqueWithoutContactInput)
    update?: Array<ChurchUpdateWithWhereUniqueWithoutContactInput>;

    @Field(() => [ChurchUpdateManyWithWhereWithoutContactInput], {nullable:true})
    @Type(() => ChurchUpdateManyWithWhereWithoutContactInput)
    updateMany?: Array<ChurchUpdateManyWithWhereWithoutContactInput>;

    @Field(() => [ChurchScalarWhereInput], {nullable:true})
    @Type(() => ChurchScalarWhereInput)
    deleteMany?: Array<ChurchScalarWhereInput>;
}
