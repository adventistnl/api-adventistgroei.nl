import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentCreateWithoutUserInput } from './assignment-create-without-user.input';
import { Type } from 'class-transformer';
import { AssignmentCreateOrConnectWithoutUserInput } from './assignment-create-or-connect-without-user.input';
import { AssignmentUpsertWithWhereUniqueWithoutUserInput } from './assignment-upsert-with-where-unique-without-user.input';
import { AssignmentCreateManyUserInputEnvelope } from './assignment-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AssignmentWhereUniqueInput } from './assignment-where-unique.input';
import { AssignmentUpdateWithWhereUniqueWithoutUserInput } from './assignment-update-with-where-unique-without-user.input';
import { AssignmentUpdateManyWithWhereWithoutUserInput } from './assignment-update-many-with-where-without-user.input';
import { AssignmentScalarWhereInput } from './assignment-scalar-where.input';

@InputType()
export class AssignmentUpdateManyWithoutUserNestedInput {

    @Field(() => [AssignmentCreateWithoutUserInput], {nullable:true})
    @Type(() => AssignmentCreateWithoutUserInput)
    create?: Array<AssignmentCreateWithoutUserInput>;

    @Field(() => [AssignmentCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AssignmentCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AssignmentCreateOrConnectWithoutUserInput>;

    @Field(() => [AssignmentUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AssignmentUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<AssignmentUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => AssignmentCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AssignmentCreateManyUserInputEnvelope)
    createMany?: AssignmentCreateManyUserInputEnvelope;

    @Field(() => [AssignmentWhereUniqueInput], {nullable:true})
    @Type(() => AssignmentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AssignmentWhereUniqueInput, 'id' | 'church_id_date'>>;

    @Field(() => [AssignmentWhereUniqueInput], {nullable:true})
    @Type(() => AssignmentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AssignmentWhereUniqueInput, 'id' | 'church_id_date'>>;

    @Field(() => [AssignmentWhereUniqueInput], {nullable:true})
    @Type(() => AssignmentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AssignmentWhereUniqueInput, 'id' | 'church_id_date'>>;

    @Field(() => [AssignmentWhereUniqueInput], {nullable:true})
    @Type(() => AssignmentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AssignmentWhereUniqueInput, 'id' | 'church_id_date'>>;

    @Field(() => [AssignmentUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AssignmentUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<AssignmentUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [AssignmentUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => AssignmentUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<AssignmentUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [AssignmentScalarWhereInput], {nullable:true})
    @Type(() => AssignmentScalarWhereInput)
    deleteMany?: Array<AssignmentScalarWhereInput>;
}
