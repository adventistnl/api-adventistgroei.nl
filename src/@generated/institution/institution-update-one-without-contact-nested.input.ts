import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutContactInput } from './institution-create-without-contact.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutContactInput } from './institution-create-or-connect-without-contact.input';
import { InstitutionUpsertWithoutContactInput } from './institution-upsert-without-contact.input';
import { InstitutionWhereInput } from './institution-where.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { InstitutionUpdateToOneWithWhereWithoutContactInput } from './institution-update-to-one-with-where-without-contact.input';

@InputType()
export class InstitutionUpdateOneWithoutContactNestedInput {

    @Field(() => InstitutionCreateWithoutContactInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutContactInput)
    create?: InstitutionCreateWithoutContactInput;

    @Field(() => InstitutionCreateOrConnectWithoutContactInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutContactInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutContactInput;

    @Field(() => InstitutionUpsertWithoutContactInput, {nullable:true})
    @Type(() => InstitutionUpsertWithoutContactInput)
    upsert?: InstitutionUpsertWithoutContactInput;

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    disconnect?: InstitutionWhereInput;

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    delete?: InstitutionWhereInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionUpdateToOneWithWhereWithoutContactInput, {nullable:true})
    @Type(() => InstitutionUpdateToOneWithWhereWithoutContactInput)
    update?: InstitutionUpdateToOneWithWhereWithoutContactInput;
}
