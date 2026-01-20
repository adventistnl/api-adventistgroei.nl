import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { Type } from 'class-transformer';
import { DepartmentUpdateWithoutLeaderInput } from './department-update-without-leader.input';

@InputType()
export class DepartmentUpdateWithWhereUniqueWithoutLeaderInput {

    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    @Type(() => DepartmentWhereUniqueInput)
    where!: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;

    @Field(() => DepartmentUpdateWithoutLeaderInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutLeaderInput)
    data!: DepartmentUpdateWithoutLeaderInput;
}
