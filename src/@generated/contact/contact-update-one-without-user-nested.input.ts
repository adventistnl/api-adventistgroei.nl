import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContactCreateWithoutUserInput } from './contact-create-without-user.input';
import { Type } from 'class-transformer';
import { ContactCreateOrConnectWithoutUserInput } from './contact-create-or-connect-without-user.input';
import { ContactUpsertWithoutUserInput } from './contact-upsert-without-user.input';
import { ContactWhereInput } from './contact-where.input';
import { Prisma } from '@prisma/client';
import { ContactWhereUniqueInput } from './contact-where-unique.input';
import { ContactUpdateToOneWithWhereWithoutUserInput } from './contact-update-to-one-with-where-without-user.input';

@InputType()
export class ContactUpdateOneWithoutUserNestedInput {

    @Field(() => ContactCreateWithoutUserInput, {nullable:true})
    @Type(() => ContactCreateWithoutUserInput)
    create?: ContactCreateWithoutUserInput;

    @Field(() => ContactCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => ContactCreateOrConnectWithoutUserInput)
    connectOrCreate?: ContactCreateOrConnectWithoutUserInput;

    @Field(() => ContactUpsertWithoutUserInput, {nullable:true})
    @Type(() => ContactUpsertWithoutUserInput)
    upsert?: ContactUpsertWithoutUserInput;

    @Field(() => ContactWhereInput, {nullable:true})
    @Type(() => ContactWhereInput)
    disconnect?: ContactWhereInput;

    @Field(() => ContactWhereInput, {nullable:true})
    @Type(() => ContactWhereInput)
    delete?: ContactWhereInput;

    @Field(() => ContactWhereUniqueInput, {nullable:true})
    @Type(() => ContactWhereUniqueInput)
    connect?: Prisma.AtLeast<ContactWhereUniqueInput, 'id'>;

    @Field(() => ContactUpdateToOneWithWhereWithoutUserInput, {nullable:true})
    @Type(() => ContactUpdateToOneWithWhereWithoutUserInput)
    update?: ContactUpdateToOneWithWhereWithoutUserInput;
}
