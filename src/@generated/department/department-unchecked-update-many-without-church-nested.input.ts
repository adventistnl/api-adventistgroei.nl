import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutChurchInput } from './department-create-without-church.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutChurchInput } from './department-create-or-connect-without-church.input';
import { DepartmentUpsertWithWhereUniqueWithoutChurchInput } from './department-upsert-with-where-unique-without-church.input';
import { DepartmentCreateManyChurchInputEnvelope } from './department-create-many-church-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { DepartmentUpdateWithWhereUniqueWithoutChurchInput } from './department-update-with-where-unique-without-church.input';
import { DepartmentUpdateManyWithWhereWithoutChurchInput } from './department-update-many-with-where-without-church.input';
import { DepartmentScalarWhereInput } from './department-scalar-where.input';

@InputType()
export class DepartmentUncheckedUpdateManyWithoutChurchNestedInput {

    @Field(() => [DepartmentCreateWithoutChurchInput], {nullable:true})
    @Type(() => DepartmentCreateWithoutChurchInput)
    create?: Array<DepartmentCreateWithoutChurchInput>;

    @Field(() => [DepartmentCreateOrConnectWithoutChurchInput], {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutChurchInput)
    connectOrCreate?: Array<DepartmentCreateOrConnectWithoutChurchInput>;

    @Field(() => [DepartmentUpsertWithWhereUniqueWithoutChurchInput], {nullable:true})
    @Type(() => DepartmentUpsertWithWhereUniqueWithoutChurchInput)
    upsert?: Array<DepartmentUpsertWithWhereUniqueWithoutChurchInput>;

    @Field(() => DepartmentCreateManyChurchInputEnvelope, {nullable:true})
    @Type(() => DepartmentCreateManyChurchInputEnvelope)
    createMany?: DepartmentCreateManyChurchInputEnvelope;

    @Field(() => [DepartmentWhereUniqueInput], {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>>;

    @Field(() => [DepartmentWhereUniqueInput], {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>>;

    @Field(() => [DepartmentWhereUniqueInput], {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>>;

    @Field(() => [DepartmentWhereUniqueInput], {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>>;

    @Field(() => [DepartmentUpdateWithWhereUniqueWithoutChurchInput], {nullable:true})
    @Type(() => DepartmentUpdateWithWhereUniqueWithoutChurchInput)
    update?: Array<DepartmentUpdateWithWhereUniqueWithoutChurchInput>;

    @Field(() => [DepartmentUpdateManyWithWhereWithoutChurchInput], {nullable:true})
    @Type(() => DepartmentUpdateManyWithWhereWithoutChurchInput)
    updateMany?: Array<DepartmentUpdateManyWithWhereWithoutChurchInput>;

    @Field(() => [DepartmentScalarWhereInput], {nullable:true})
    @Type(() => DepartmentScalarWhereInput)
    deleteMany?: Array<DepartmentScalarWhereInput>;
}
