import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchWhereInput } from './church-where.input';
import { Type } from 'class-transformer';
import { ChurchUpdateWithoutUsersInput } from './church-update-without-users.input';

@InputType()
export class ChurchUpdateToOneWithWhereWithoutUsersInput {

    @Field(() => ChurchWhereInput, {nullable:true})
    @Type(() => ChurchWhereInput)
    where?: ChurchWhereInput;

    @Field(() => ChurchUpdateWithoutUsersInput, {nullable:false})
    @Type(() => ChurchUpdateWithoutUsersInput)
    data!: ChurchUpdateWithoutUsersInput;
}
