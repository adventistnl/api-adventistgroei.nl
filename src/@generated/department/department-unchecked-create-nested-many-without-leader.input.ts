import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutLeaderInput } from './department-create-without-leader.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutLeaderInput } from './department-create-or-connect-without-leader.input';
import { DepartmentCreateManyLeaderInputEnvelope } from './department-create-many-leader-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';

@InputType()
export class DepartmentUncheckedCreateNestedManyWithoutLeaderInput {

    @Field(() => [DepartmentCreateWithoutLeaderInput], {nullable:true})
    @Type(() => DepartmentCreateWithoutLeaderInput)
    create?: Array<DepartmentCreateWithoutLeaderInput>;

    @Field(() => [DepartmentCreateOrConnectWithoutLeaderInput], {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutLeaderInput)
    connectOrCreate?: Array<DepartmentCreateOrConnectWithoutLeaderInput>;

    @Field(() => DepartmentCreateManyLeaderInputEnvelope, {nullable:true})
    @Type(() => DepartmentCreateManyLeaderInputEnvelope)
    createMany?: DepartmentCreateManyLeaderInputEnvelope;

    @Field(() => [DepartmentWhereUniqueInput], {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>>;
}
