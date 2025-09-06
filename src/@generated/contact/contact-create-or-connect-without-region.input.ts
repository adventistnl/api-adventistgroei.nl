import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContactWhereUniqueInput } from './contact-where-unique.input';
import { Type } from 'class-transformer';
import { ContactCreateWithoutRegionInput } from './contact-create-without-region.input';

@InputType()
export class ContactCreateOrConnectWithoutRegionInput {

    @Field(() => ContactWhereUniqueInput, {nullable:false})
    @Type(() => ContactWhereUniqueInput)
    where!: Prisma.AtLeast<ContactWhereUniqueInput, 'id'>;

    @Field(() => ContactCreateWithoutRegionInput, {nullable:false})
    @Type(() => ContactCreateWithoutRegionInput)
    create!: ContactCreateWithoutRegionInput;
}
