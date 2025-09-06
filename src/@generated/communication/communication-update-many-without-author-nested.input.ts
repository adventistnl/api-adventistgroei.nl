import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunicationCreateWithoutAuthorInput } from './communication-create-without-author.input';
import { Type } from 'class-transformer';
import { CommunicationCreateOrConnectWithoutAuthorInput } from './communication-create-or-connect-without-author.input';
import { CommunicationUpsertWithWhereUniqueWithoutAuthorInput } from './communication-upsert-with-where-unique-without-author.input';
import { CommunicationCreateManyAuthorInputEnvelope } from './communication-create-many-author-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommunicationWhereUniqueInput } from './communication-where-unique.input';
import { CommunicationUpdateWithWhereUniqueWithoutAuthorInput } from './communication-update-with-where-unique-without-author.input';
import { CommunicationUpdateManyWithWhereWithoutAuthorInput } from './communication-update-many-with-where-without-author.input';
import { CommunicationScalarWhereInput } from './communication-scalar-where.input';

@InputType()
export class CommunicationUpdateManyWithoutAuthorNestedInput {

    @Field(() => [CommunicationCreateWithoutAuthorInput], {nullable:true})
    @Type(() => CommunicationCreateWithoutAuthorInput)
    create?: Array<CommunicationCreateWithoutAuthorInput>;

    @Field(() => [CommunicationCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => CommunicationCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<CommunicationCreateOrConnectWithoutAuthorInput>;

    @Field(() => [CommunicationUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => CommunicationUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<CommunicationUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => CommunicationCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => CommunicationCreateManyAuthorInputEnvelope)
    createMany?: CommunicationCreateManyAuthorInputEnvelope;

    @Field(() => [CommunicationWhereUniqueInput], {nullable:true})
    @Type(() => CommunicationWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommunicationWhereUniqueInput, 'id'>>;

    @Field(() => [CommunicationWhereUniqueInput], {nullable:true})
    @Type(() => CommunicationWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommunicationWhereUniqueInput, 'id'>>;

    @Field(() => [CommunicationWhereUniqueInput], {nullable:true})
    @Type(() => CommunicationWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommunicationWhereUniqueInput, 'id'>>;

    @Field(() => [CommunicationWhereUniqueInput], {nullable:true})
    @Type(() => CommunicationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommunicationWhereUniqueInput, 'id'>>;

    @Field(() => [CommunicationUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => CommunicationUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<CommunicationUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [CommunicationUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => CommunicationUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<CommunicationUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [CommunicationScalarWhereInput], {nullable:true})
    @Type(() => CommunicationScalarWhereInput)
    deleteMany?: Array<CommunicationScalarWhereInput>;
}
