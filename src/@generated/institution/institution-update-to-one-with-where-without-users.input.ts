import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionWhereInput } from './institution-where.input';
import { Type } from 'class-transformer';
import { InstitutionUpdateWithoutUsersInput } from './institution-update-without-users.input';

@InputType()
export class InstitutionUpdateToOneWithWhereWithoutUsersInput {

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;

    @Field(() => InstitutionUpdateWithoutUsersInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutUsersInput)
    data!: InstitutionUpdateWithoutUsersInput;
}
