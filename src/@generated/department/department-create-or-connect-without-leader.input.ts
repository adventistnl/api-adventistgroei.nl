import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { Type } from 'class-transformer';
import { DepartmentCreateWithoutLeaderInput } from './department-create-without-leader.input';

@InputType()
export class DepartmentCreateOrConnectWithoutLeaderInput {

    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    @Type(() => DepartmentWhereUniqueInput)
    where!: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;

    @Field(() => DepartmentCreateWithoutLeaderInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutLeaderInput)
    create!: DepartmentCreateWithoutLeaderInput;
}
