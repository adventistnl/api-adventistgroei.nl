import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContactCreateWithoutRegionInput } from './contact-create-without-region.input';
import { Type } from 'class-transformer';
import { ContactCreateOrConnectWithoutRegionInput } from './contact-create-or-connect-without-region.input';
import { ContactUpsertWithoutRegionInput } from './contact-upsert-without-region.input';
import { ContactWhereInput } from './contact-where.input';
import { Prisma } from '@prisma/client';
import { ContactWhereUniqueInput } from './contact-where-unique.input';
import { ContactUpdateToOneWithWhereWithoutRegionInput } from './contact-update-to-one-with-where-without-region.input';

@InputType()
export class ContactUpdateOneWithoutRegionNestedInput {

    @Field(() => ContactCreateWithoutRegionInput, {nullable:true})
    @Type(() => ContactCreateWithoutRegionInput)
    create?: ContactCreateWithoutRegionInput;

    @Field(() => ContactCreateOrConnectWithoutRegionInput, {nullable:true})
    @Type(() => ContactCreateOrConnectWithoutRegionInput)
    connectOrCreate?: ContactCreateOrConnectWithoutRegionInput;

    @Field(() => ContactUpsertWithoutRegionInput, {nullable:true})
    @Type(() => ContactUpsertWithoutRegionInput)
    upsert?: ContactUpsertWithoutRegionInput;

    @Field(() => ContactWhereInput, {nullable:true})
    @Type(() => ContactWhereInput)
    disconnect?: ContactWhereInput;

    @Field(() => ContactWhereInput, {nullable:true})
    @Type(() => ContactWhereInput)
    delete?: ContactWhereInput;

    @Field(() => ContactWhereUniqueInput, {nullable:true})
    @Type(() => ContactWhereUniqueInput)
    connect?: Prisma.AtLeast<ContactWhereUniqueInput, 'id'>;

    @Field(() => ContactUpdateToOneWithWhereWithoutRegionInput, {nullable:true})
    @Type(() => ContactUpdateToOneWithWhereWithoutRegionInput)
    update?: ContactUpdateToOneWithWhereWithoutRegionInput;
}
