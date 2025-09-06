import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionUpdateWithoutUsersInput } from './institution-update-without-users.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutUsersInput } from './institution-create-without-users.input';
import { InstitutionWhereInput } from './institution-where.input';

@InputType()
export class InstitutionUpsertWithoutUsersInput {

    @Field(() => InstitutionUpdateWithoutUsersInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutUsersInput)
    update!: InstitutionUpdateWithoutUsersInput;

    @Field(() => InstitutionCreateWithoutUsersInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutUsersInput)
    create!: InstitutionCreateWithoutUsersInput;

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;
}
