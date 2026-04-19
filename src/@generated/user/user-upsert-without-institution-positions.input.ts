import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutInstitution_positionsInput } from './user-update-without-institution-positions.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutInstitution_positionsInput } from './user-create-without-institution-positions.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutInstitution_positionsInput {

    @Field(() => UserUpdateWithoutInstitution_positionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutInstitution_positionsInput)
    update!: UserUpdateWithoutInstitution_positionsInput;

    @Field(() => UserCreateWithoutInstitution_positionsInput, {nullable:false})
    @Type(() => UserCreateWithoutInstitution_positionsInput)
    create!: UserCreateWithoutInstitution_positionsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
