import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentWhereInput } from './department-where.input';
import { Type } from 'class-transformer';
import { DepartmentUpdateWithoutUsersInput } from './department-update-without-users.input';

@InputType()
export class DepartmentUpdateToOneWithWhereWithoutUsersInput {

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    where?: DepartmentWhereInput;

    @Field(() => DepartmentUpdateWithoutUsersInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutUsersInput)
    data!: DepartmentUpdateWithoutUsersInput;
}
