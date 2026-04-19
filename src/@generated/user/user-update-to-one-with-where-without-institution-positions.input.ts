import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutInstitution_positionsInput } from './user-update-without-institution-positions.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutInstitution_positionsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutInstitution_positionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutInstitution_positionsInput)
    data!: UserUpdateWithoutInstitution_positionsInput;
}
