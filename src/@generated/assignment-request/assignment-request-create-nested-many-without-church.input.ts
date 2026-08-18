import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentRequestCreateWithoutChurchInput } from './assignment-request-create-without-church.input';
import { Type } from 'class-transformer';
import { AssignmentRequestCreateOrConnectWithoutChurchInput } from './assignment-request-create-or-connect-without-church.input';
import { AssignmentRequestCreateManyChurchInputEnvelope } from './assignment-request-create-many-church-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AssignmentRequestWhereUniqueInput } from './assignment-request-where-unique.input';

@InputType()
export class AssignmentRequestCreateNestedManyWithoutChurchInput {

    @Field(() => [AssignmentRequestCreateWithoutChurchInput], {nullable:true})
    @Type(() => AssignmentRequestCreateWithoutChurchInput)
    create?: Array<AssignmentRequestCreateWithoutChurchInput>;

    @Field(() => [AssignmentRequestCreateOrConnectWithoutChurchInput], {nullable:true})
    @Type(() => AssignmentRequestCreateOrConnectWithoutChurchInput)
    connectOrCreate?: Array<AssignmentRequestCreateOrConnectWithoutChurchInput>;

    @Field(() => AssignmentRequestCreateManyChurchInputEnvelope, {nullable:true})
    @Type(() => AssignmentRequestCreateManyChurchInputEnvelope)
    createMany?: AssignmentRequestCreateManyChurchInputEnvelope;

    @Field(() => [AssignmentRequestWhereUniqueInput], {nullable:true})
    @Type(() => AssignmentRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AssignmentRequestWhereUniqueInput, 'id'>>;
}
