import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutLeaderInput } from './department-create-without-leader.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutLeaderInput } from './department-create-or-connect-without-leader.input';
import { DepartmentUpsertWithWhereUniqueWithoutLeaderInput } from './department-upsert-with-where-unique-without-leader.input';
import { DepartmentCreateManyLeaderInputEnvelope } from './department-create-many-leader-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { DepartmentUpdateWithWhereUniqueWithoutLeaderInput } from './department-update-with-where-unique-without-leader.input';
import { DepartmentUpdateManyWithWhereWithoutLeaderInput } from './department-update-many-with-where-without-leader.input';
import { DepartmentScalarWhereInput } from './department-scalar-where.input';

@InputType()
export class DepartmentUpdateManyWithoutLeaderNestedInput {

    @Field(() => [DepartmentCreateWithoutLeaderInput], {nullable:true})
    @Type(() => DepartmentCreateWithoutLeaderInput)
    create?: Array<DepartmentCreateWithoutLeaderInput>;

    @Field(() => [DepartmentCreateOrConnectWithoutLeaderInput], {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutLeaderInput)
    connectOrCreate?: Array<DepartmentCreateOrConnectWithoutLeaderInput>;

    @Field(() => [DepartmentUpsertWithWhereUniqueWithoutLeaderInput], {nullable:true})
    @Type(() => DepartmentUpsertWithWhereUniqueWithoutLeaderInput)
    upsert?: Array<DepartmentUpsertWithWhereUniqueWithoutLeaderInput>;

    @Field(() => DepartmentCreateManyLeaderInputEnvelope, {nullable:true})
    @Type(() => DepartmentCreateManyLeaderInputEnvelope)
    createMany?: DepartmentCreateManyLeaderInputEnvelope;

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

    @Field(() => [DepartmentUpdateWithWhereUniqueWithoutLeaderInput], {nullable:true})
    @Type(() => DepartmentUpdateWithWhereUniqueWithoutLeaderInput)
    update?: Array<DepartmentUpdateWithWhereUniqueWithoutLeaderInput>;

    @Field(() => [DepartmentUpdateManyWithWhereWithoutLeaderInput], {nullable:true})
    @Type(() => DepartmentUpdateManyWithWhereWithoutLeaderInput)
    updateMany?: Array<DepartmentUpdateManyWithWhereWithoutLeaderInput>;

    @Field(() => [DepartmentScalarWhereInput], {nullable:true})
    @Type(() => DepartmentScalarWhereInput)
    deleteMany?: Array<DepartmentScalarWhereInput>;
}
