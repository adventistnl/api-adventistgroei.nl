import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchUpdateWithoutUsersInput } from './church-update-without-users.input';
import { Type } from 'class-transformer';
import { ChurchCreateWithoutUsersInput } from './church-create-without-users.input';
import { ChurchWhereInput } from './church-where.input';

@InputType()
export class ChurchUpsertWithoutUsersInput {

    @Field(() => ChurchUpdateWithoutUsersInput, {nullable:false})
    @Type(() => ChurchUpdateWithoutUsersInput)
    update!: ChurchUpdateWithoutUsersInput;

    @Field(() => ChurchCreateWithoutUsersInput, {nullable:false})
    @Type(() => ChurchCreateWithoutUsersInput)
    create!: ChurchCreateWithoutUsersInput;

    @Field(() => ChurchWhereInput, {nullable:true})
    @Type(() => ChurchWhereInput)
    where?: ChurchWhereInput;
}
