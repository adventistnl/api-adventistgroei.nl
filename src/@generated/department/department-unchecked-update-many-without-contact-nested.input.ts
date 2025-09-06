import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutContactInput } from './department-create-without-contact.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutContactInput } from './department-create-or-connect-without-contact.input';
import { DepartmentUpsertWithWhereUniqueWithoutContactInput } from './department-upsert-with-where-unique-without-contact.input';
import { DepartmentCreateManyContactInputEnvelope } from './department-create-many-contact-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { DepartmentUpdateWithWhereUniqueWithoutContactInput } from './department-update-with-where-unique-without-contact.input';
import { DepartmentUpdateManyWithWhereWithoutContactInput } from './department-update-many-with-where-without-contact.input';
import { DepartmentScalarWhereInput } from './department-scalar-where.input';

@InputType()
export class DepartmentUncheckedUpdateManyWithoutContactNestedInput {

    @Field(() => [DepartmentCreateWithoutContactInput], {nullable:true})
    @Type(() => DepartmentCreateWithoutContactInput)
    create?: Array<DepartmentCreateWithoutContactInput>;

    @Field(() => [DepartmentCreateOrConnectWithoutContactInput], {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutContactInput)
    connectOrCreate?: Array<DepartmentCreateOrConnectWithoutContactInput>;

    @Field(() => [DepartmentUpsertWithWhereUniqueWithoutContactInput], {nullable:true})
    @Type(() => DepartmentUpsertWithWhereUniqueWithoutContactInput)
    upsert?: Array<DepartmentUpsertWithWhereUniqueWithoutContactInput>;

    @Field(() => DepartmentCreateManyContactInputEnvelope, {nullable:true})
    @Type(() => DepartmentCreateManyContactInputEnvelope)
    createMany?: DepartmentCreateManyContactInputEnvelope;

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

    @Field(() => [DepartmentUpdateWithWhereUniqueWithoutContactInput], {nullable:true})
    @Type(() => DepartmentUpdateWithWhereUniqueWithoutContactInput)
    update?: Array<DepartmentUpdateWithWhereUniqueWithoutContactInput>;

    @Field(() => [DepartmentUpdateManyWithWhereWithoutContactInput], {nullable:true})
    @Type(() => DepartmentUpdateManyWithWhereWithoutContactInput)
    updateMany?: Array<DepartmentUpdateManyWithWhereWithoutContactInput>;

    @Field(() => [DepartmentScalarWhereInput], {nullable:true})
    @Type(() => DepartmentScalarWhereInput)
    deleteMany?: Array<DepartmentScalarWhereInput>;
}
