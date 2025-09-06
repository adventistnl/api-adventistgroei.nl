import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutChurchInput } from './department-create-without-church.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutChurchInput } from './department-create-or-connect-without-church.input';
import { DepartmentCreateManyChurchInputEnvelope } from './department-create-many-church-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';

@InputType()
export class DepartmentCreateNestedManyWithoutChurchInput {

    @Field(() => [DepartmentCreateWithoutChurchInput], {nullable:true})
    @Type(() => DepartmentCreateWithoutChurchInput)
    create?: Array<DepartmentCreateWithoutChurchInput>;

    @Field(() => [DepartmentCreateOrConnectWithoutChurchInput], {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutChurchInput)
    connectOrCreate?: Array<DepartmentCreateOrConnectWithoutChurchInput>;

    @Field(() => DepartmentCreateManyChurchInputEnvelope, {nullable:true})
    @Type(() => DepartmentCreateManyChurchInputEnvelope)
    createMany?: DepartmentCreateManyChurchInputEnvelope;

    @Field(() => [DepartmentWhereUniqueInput], {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>>;
}
