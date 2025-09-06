import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { Type } from 'class-transformer';
import { DepartmentUpdateWithoutChurchInput } from './department-update-without-church.input';
import { DepartmentCreateWithoutChurchInput } from './department-create-without-church.input';

@InputType()
export class DepartmentUpsertWithWhereUniqueWithoutChurchInput {

    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    @Type(() => DepartmentWhereUniqueInput)
    where!: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;

    @Field(() => DepartmentUpdateWithoutChurchInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutChurchInput)
    update!: DepartmentUpdateWithoutChurchInput;

    @Field(() => DepartmentCreateWithoutChurchInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutChurchInput)
    create!: DepartmentCreateWithoutChurchInput;
}
