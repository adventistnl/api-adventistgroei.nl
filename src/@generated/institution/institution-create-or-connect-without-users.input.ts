import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutUsersInput } from './institution-create-without-users.input';

@InputType()
export class InstitutionCreateOrConnectWithoutUsersInput {

    @Field(() => InstitutionWhereUniqueInput, {nullable:false})
    @Type(() => InstitutionWhereUniqueInput)
    where!: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionCreateWithoutUsersInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutUsersInput)
    create!: InstitutionCreateWithoutUsersInput;
}
