import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContactCreateWithoutChurchInput } from './contact-create-without-church.input';
import { Type } from 'class-transformer';
import { ContactCreateOrConnectWithoutChurchInput } from './contact-create-or-connect-without-church.input';
import { ContactUpsertWithoutChurchInput } from './contact-upsert-without-church.input';
import { ContactWhereInput } from './contact-where.input';
import { Prisma } from '@prisma/client';
import { ContactWhereUniqueInput } from './contact-where-unique.input';
import { ContactUpdateToOneWithWhereWithoutChurchInput } from './contact-update-to-one-with-where-without-church.input';

@InputType()
export class ContactUpdateOneWithoutChurchNestedInput {

    @Field(() => ContactCreateWithoutChurchInput, {nullable:true})
    @Type(() => ContactCreateWithoutChurchInput)
    create?: ContactCreateWithoutChurchInput;

    @Field(() => ContactCreateOrConnectWithoutChurchInput, {nullable:true})
    @Type(() => ContactCreateOrConnectWithoutChurchInput)
    connectOrCreate?: ContactCreateOrConnectWithoutChurchInput;

    @Field(() => ContactUpsertWithoutChurchInput, {nullable:true})
    @Type(() => ContactUpsertWithoutChurchInput)
    upsert?: ContactUpsertWithoutChurchInput;

    @Field(() => ContactWhereInput, {nullable:true})
    @Type(() => ContactWhereInput)
    disconnect?: ContactWhereInput;

    @Field(() => ContactWhereInput, {nullable:true})
    @Type(() => ContactWhereInput)
    delete?: ContactWhereInput;

    @Field(() => ContactWhereUniqueInput, {nullable:true})
    @Type(() => ContactWhereUniqueInput)
    connect?: Prisma.AtLeast<ContactWhereUniqueInput, 'id'>;

    @Field(() => ContactUpdateToOneWithWhereWithoutChurchInput, {nullable:true})
    @Type(() => ContactUpdateToOneWithWhereWithoutChurchInput)
    update?: ContactUpdateToOneWithWhereWithoutChurchInput;
}
