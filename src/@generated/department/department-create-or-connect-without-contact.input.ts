import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { Type } from 'class-transformer';
import { DepartmentCreateWithoutContactInput } from './department-create-without-contact.input';

@InputType()
export class DepartmentCreateOrConnectWithoutContactInput {

    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    @Type(() => DepartmentWhereUniqueInput)
    where!: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;

    @Field(() => DepartmentCreateWithoutContactInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutContactInput)
    create!: DepartmentCreateWithoutContactInput;
}
