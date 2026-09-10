import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentRequestCreateWithoutChurchInput } from './assignment-request-create-without-church.input';
import { Type } from 'class-transformer';
import { AssignmentRequestCreateOrConnectWithoutChurchInput } from './assignment-request-create-or-connect-without-church.input';
import { AssignmentRequestUpsertWithWhereUniqueWithoutChurchInput } from './assignment-request-upsert-with-where-unique-without-church.input';
import { AssignmentRequestCreateManyChurchInputEnvelope } from './assignment-request-create-many-church-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AssignmentRequestWhereUniqueInput } from './assignment-request-where-unique.input';
import { AssignmentRequestUpdateWithWhereUniqueWithoutChurchInput } from './assignment-request-update-with-where-unique-without-church.input';
import { AssignmentRequestUpdateManyWithWhereWithoutChurchInput } from './assignment-request-update-many-with-where-without-church.input';
import { AssignmentRequestScalarWhereInput } from './assignment-request-scalar-where.input';

@InputType()
export class AssignmentRequestUpdateManyWithoutChurchNestedInput {

    @Field(() => [AssignmentRequestCreateWithoutChurchInput], {nullable:true})
    @Type(() => AssignmentRequestCreateWithoutChurchInput)
    create?: Array<AssignmentRequestCreateWithoutChurchInput>;

    @Field(() => [AssignmentRequestCreateOrConnectWithoutChurchInput], {nullable:true})
    @Type(() => AssignmentRequestCreateOrConnectWithoutChurchInput)
    connectOrCreate?: Array<AssignmentRequestCreateOrConnectWithoutChurchInput>;

    @Field(() => [AssignmentRequestUpsertWithWhereUniqueWithoutChurchInput], {nullable:true})
    @Type(() => AssignmentRequestUpsertWithWhereUniqueWithoutChurchInput)
    upsert?: Array<AssignmentRequestUpsertWithWhereUniqueWithoutChurchInput>;

    @Field(() => AssignmentRequestCreateManyChurchInputEnvelope, {nullable:true})
    @Type(() => AssignmentRequestCreateManyChurchInputEnvelope)
    createMany?: AssignmentRequestCreateManyChurchInputEnvelope;

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

    @Field(() => [AssignmentRequestUpdateWithWhereUniqueWithoutChurchInput], {nullable:true})
    @Type(() => AssignmentRequestUpdateWithWhereUniqueWithoutChurchInput)
    update?: Array<AssignmentRequestUpdateWithWhereUniqueWithoutChurchInput>;

    @Field(() => [AssignmentRequestUpdateManyWithWhereWithoutChurchInput], {nullable:true})
    @Type(() => AssignmentRequestUpdateManyWithWhereWithoutChurchInput)
    updateMany?: Array<AssignmentRequestUpdateManyWithWhereWithoutChurchInput>;

    @Field(() => [AssignmentRequestScalarWhereInput], {nullable:true})
    @Type(() => AssignmentRequestScalarWhereInput)
    deleteMany?: Array<AssignmentRequestScalarWhereInput>;
}
