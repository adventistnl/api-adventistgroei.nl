import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutContactInput } from './institution-create-without-contact.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutContactInput } from './institution-create-or-connect-without-contact.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';

@InputType()
export class InstitutionCreateNestedOneWithoutContactInput {

    @Field(() => InstitutionCreateWithoutContactInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutContactInput)
    create?: InstitutionCreateWithoutContactInput;

    @Field(() => InstitutionCreateOrConnectWithoutContactInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutContactInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutContactInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;
}
