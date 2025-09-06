import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { Type } from 'class-transformer';
import { DepartmentUpdateWithoutContactInput } from './department-update-without-contact.input';
import { DepartmentCreateWithoutContactInput } from './department-create-without-contact.input';

@InputType()
export class DepartmentUpsertWithWhereUniqueWithoutContactInput {

    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    @Type(() => DepartmentWhereUniqueInput)
    where!: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;

    @Field(() => DepartmentUpdateWithoutContactInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutContactInput)
    update!: DepartmentUpdateWithoutContactInput;

    @Field(() => DepartmentCreateWithoutContactInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutContactInput)
    create!: DepartmentCreateWithoutContactInput;
}
