import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContactCreateWithoutChurchInput } from './contact-create-without-church.input';
import { Type } from 'class-transformer';
import { ContactCreateOrConnectWithoutChurchInput } from './contact-create-or-connect-without-church.input';
import { Prisma } from '@prisma/client';
import { ContactWhereUniqueInput } from './contact-where-unique.input';

@InputType()
export class ContactCreateNestedOneWithoutChurchInput {

    @Field(() => ContactCreateWithoutChurchInput, {nullable:true})
    @Type(() => ContactCreateWithoutChurchInput)
    create?: ContactCreateWithoutChurchInput;

    @Field(() => ContactCreateOrConnectWithoutChurchInput, {nullable:true})
    @Type(() => ContactCreateOrConnectWithoutChurchInput)
    connectOrCreate?: ContactCreateOrConnectWithoutChurchInput;

    @Field(() => ContactWhereUniqueInput, {nullable:true})
    @Type(() => ContactWhereUniqueInput)
    connect?: Prisma.AtLeast<ContactWhereUniqueInput, 'id'>;
}
