import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContactCreateWithoutRegionInput } from './contact-create-without-region.input';
import { Type } from 'class-transformer';
import { ContactCreateOrConnectWithoutRegionInput } from './contact-create-or-connect-without-region.input';
import { Prisma } from '@prisma/client';
import { ContactWhereUniqueInput } from './contact-where-unique.input';

@InputType()
export class ContactCreateNestedOneWithoutRegionInput {

    @Field(() => ContactCreateWithoutRegionInput, {nullable:true})
    @Type(() => ContactCreateWithoutRegionInput)
    create?: ContactCreateWithoutRegionInput;

    @Field(() => ContactCreateOrConnectWithoutRegionInput, {nullable:true})
    @Type(() => ContactCreateOrConnectWithoutRegionInput)
    connectOrCreate?: ContactCreateOrConnectWithoutRegionInput;

    @Field(() => ContactWhereUniqueInput, {nullable:true})
    @Type(() => ContactWhereUniqueInput)
    connect?: Prisma.AtLeast<ContactWhereUniqueInput, 'id'>;
}
