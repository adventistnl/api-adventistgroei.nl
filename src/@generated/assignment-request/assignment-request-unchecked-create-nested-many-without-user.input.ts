import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentRequestCreateWithoutUserInput } from './assignment-request-create-without-user.input';
import { Type } from 'class-transformer';
import { AssignmentRequestCreateOrConnectWithoutUserInput } from './assignment-request-create-or-connect-without-user.input';
import { AssignmentRequestCreateManyUserInputEnvelope } from './assignment-request-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AssignmentRequestWhereUniqueInput } from './assignment-request-where-unique.input';

@InputType()
export class AssignmentRequestUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [AssignmentRequestCreateWithoutUserInput], {nullable:true})
    @Type(() => AssignmentRequestCreateWithoutUserInput)
    create?: Array<AssignmentRequestCreateWithoutUserInput>;

    @Field(() => [AssignmentRequestCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AssignmentRequestCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AssignmentRequestCreateOrConnectWithoutUserInput>;

    @Field(() => AssignmentRequestCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AssignmentRequestCreateManyUserInputEnvelope)
    createMany?: AssignmentRequestCreateManyUserInputEnvelope;

    @Field(() => [AssignmentRequestWhereUniqueInput], {nullable:true})
    @Type(() => AssignmentRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AssignmentRequestWhereUniqueInput, 'id'>>;
}
