import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateManyDepartmentInput } from './user-create-many-department.input';
import { Type } from 'class-transformer';

@InputType()
export class UserCreateManyDepartmentInputEnvelope {

    @Field(() => [UserCreateManyDepartmentInput], {nullable:false})
    @Type(() => UserCreateManyDepartmentInput)
    data!: Array<UserCreateManyDepartmentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
