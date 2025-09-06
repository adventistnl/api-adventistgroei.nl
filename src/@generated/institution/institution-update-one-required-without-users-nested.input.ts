import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutUsersInput } from './institution-create-without-users.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutUsersInput } from './institution-create-or-connect-without-users.input';
import { InstitutionUpsertWithoutUsersInput } from './institution-upsert-without-users.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { InstitutionUpdateToOneWithWhereWithoutUsersInput } from './institution-update-to-one-with-where-without-users.input';

@InputType()
export class InstitutionUpdateOneRequiredWithoutUsersNestedInput {

    @Field(() => InstitutionCreateWithoutUsersInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutUsersInput)
    create?: InstitutionCreateWithoutUsersInput;

    @Field(() => InstitutionCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutUsersInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutUsersInput;

    @Field(() => InstitutionUpsertWithoutUsersInput, {nullable:true})
    @Type(() => InstitutionUpsertWithoutUsersInput)
    upsert?: InstitutionUpsertWithoutUsersInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionUpdateToOneWithWhereWithoutUsersInput, {nullable:true})
    @Type(() => InstitutionUpdateToOneWithWhereWithoutUsersInput)
    update?: InstitutionUpdateToOneWithWhereWithoutUsersInput;
}
