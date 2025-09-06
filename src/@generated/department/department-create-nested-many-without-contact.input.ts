import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutContactInput } from './department-create-without-contact.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutContactInput } from './department-create-or-connect-without-contact.input';
import { DepartmentCreateManyContactInputEnvelope } from './department-create-many-contact-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';

@InputType()
export class DepartmentCreateNestedManyWithoutContactInput {

    @Field(() => [DepartmentCreateWithoutContactInput], {nullable:true})
    @Type(() => DepartmentCreateWithoutContactInput)
    create?: Array<DepartmentCreateWithoutContactInput>;

    @Field(() => [DepartmentCreateOrConnectWithoutContactInput], {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutContactInput)
    connectOrCreate?: Array<DepartmentCreateOrConnectWithoutContactInput>;

    @Field(() => DepartmentCreateManyContactInputEnvelope, {nullable:true})
    @Type(() => DepartmentCreateManyContactInputEnvelope)
    createMany?: DepartmentCreateManyContactInputEnvelope;

    @Field(() => [DepartmentWhereUniqueInput], {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>>;
}
