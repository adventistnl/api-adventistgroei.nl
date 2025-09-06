import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContactCreateWithoutEventInput } from './contact-create-without-event.input';
import { Type } from 'class-transformer';
import { ContactCreateOrConnectWithoutEventInput } from './contact-create-or-connect-without-event.input';
import { Prisma } from '@prisma/client';
import { ContactWhereUniqueInput } from './contact-where-unique.input';

@InputType()
export class ContactCreateNestedOneWithoutEventInput {

    @Field(() => ContactCreateWithoutEventInput, {nullable:true})
    @Type(() => ContactCreateWithoutEventInput)
    create?: ContactCreateWithoutEventInput;

    @Field(() => ContactCreateOrConnectWithoutEventInput, {nullable:true})
    @Type(() => ContactCreateOrConnectWithoutEventInput)
    connectOrCreate?: ContactCreateOrConnectWithoutEventInput;

    @Field(() => ContactWhereUniqueInput, {nullable:true})
    @Type(() => ContactWhereUniqueInput)
    connect?: Prisma.AtLeast<ContactWhereUniqueInput, 'id'>;
}
