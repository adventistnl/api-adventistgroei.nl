import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentUpdateWithoutUsersInput } from './department-update-without-users.input';
import { Type } from 'class-transformer';
import { DepartmentCreateWithoutUsersInput } from './department-create-without-users.input';
import { DepartmentWhereInput } from './department-where.input';

@InputType()
export class DepartmentUpsertWithoutUsersInput {

    @Field(() => DepartmentUpdateWithoutUsersInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutUsersInput)
    update!: DepartmentUpdateWithoutUsersInput;

    @Field(() => DepartmentCreateWithoutUsersInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutUsersInput)
    create!: DepartmentCreateWithoutUsersInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    where?: DepartmentWhereInput;
}
