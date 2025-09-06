import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { Type } from 'class-transformer';
import { DepartmentCreateWithoutChurchInput } from './department-create-without-church.input';

@InputType()
export class DepartmentCreateOrConnectWithoutChurchInput {

    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    @Type(() => DepartmentWhereUniqueInput)
    where!: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;

    @Field(() => DepartmentCreateWithoutChurchInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutChurchInput)
    create!: DepartmentCreateWithoutChurchInput;
}
