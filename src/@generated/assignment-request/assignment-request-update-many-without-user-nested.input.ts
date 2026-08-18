import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentRequestCreateWithoutUserInput } from './assignment-request-create-without-user.input';
import { Type } from 'class-transformer';
import { AssignmentRequestCreateOrConnectWithoutUserInput } from './assignment-request-create-or-connect-without-user.input';
import { AssignmentRequestUpsertWithWhereUniqueWithoutUserInput } from './assignment-request-upsert-with-where-unique-without-user.input';
import { AssignmentRequestCreateManyUserInputEnvelope } from './assignment-request-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AssignmentRequestWhereUniqueInput } from './assignment-request-where-unique.input';
import { AssignmentRequestUpdateWithWhereUniqueWithoutUserInput } from './assignment-request-update-with-where-unique-without-user.input';
import { AssignmentRequestUpdateManyWithWhereWithoutUserInput } from './assignment-request-update-many-with-where-without-user.input';
import { AssignmentRequestScalarWhereInput } from './assignment-request-scalar-where.input';

@InputType()
export class AssignmentRequestUpdateManyWithoutUserNestedInput {

    @Field(() => [AssignmentRequestCreateWithoutUserInput], {nullable:true})
    @Type(() => AssignmentRequestCreateWithoutUserInput)
    create?: Array<AssignmentRequestCreateWithoutUserInput>;

    @Field(() => [AssignmentRequestCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AssignmentRequestCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AssignmentRequestCreateOrConnectWithoutUserInput>;

    @Field(() => [AssignmentRequestUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AssignmentRequestUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<AssignmentRequestUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => AssignmentRequestCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AssignmentRequestCreateManyUserInputEnvelope)
    createMany?: AssignmentRequestCreateManyUserInputEnvelope;

    @Field(() => [AssignmentRequestWhereUniqueInput], {nullable:true})
    @Type(() => AssignmentRequestWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AssignmentRequestWhereUniqueInput, 'id'>>;

    @Field(() => [AssignmentRequestWhereUniqueInput], {nullable:true})
    @Type(() => AssignmentRequestWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AssignmentRequestWhereUniqueInput, 'id'>>;

    @Field(() => [AssignmentRequestWhereUniqueInput], {nullable:true})
    @Type(() => AssignmentRequestWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AssignmentRequestWhereUniqueInput, 'id'>>;

    @Field(() => [AssignmentRequestWhereUniqueInput], {nullable:true})
    @Type(() => AssignmentRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AssignmentRequestWhereUniqueInput, 'id'>>;

    @Field(() => [AssignmentRequestUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AssignmentRequestUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<AssignmentRequestUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [AssignmentRequestUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => AssignmentRequestUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<AssignmentRequestUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [AssignmentRequestScalarWhereInput], {nullable:true})
    @Type(() => AssignmentRequestScalarWhereInput)
    deleteMany?: Array<AssignmentRequestScalarWhereInput>;
}
