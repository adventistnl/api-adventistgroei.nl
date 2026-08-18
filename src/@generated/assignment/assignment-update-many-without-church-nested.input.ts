import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentCreateWithoutChurchInput } from './assignment-create-without-church.input';
import { Type } from 'class-transformer';
import { AssignmentCreateOrConnectWithoutChurchInput } from './assignment-create-or-connect-without-church.input';
import { AssignmentUpsertWithWhereUniqueWithoutChurchInput } from './assignment-upsert-with-where-unique-without-church.input';
import { AssignmentCreateManyChurchInputEnvelope } from './assignment-create-many-church-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AssignmentWhereUniqueInput } from './assignment-where-unique.input';
import { AssignmentUpdateWithWhereUniqueWithoutChurchInput } from './assignment-update-with-where-unique-without-church.input';
import { AssignmentUpdateManyWithWhereWithoutChurchInput } from './assignment-update-many-with-where-without-church.input';
import { AssignmentScalarWhereInput } from './assignment-scalar-where.input';

@InputType()
export class AssignmentUpdateManyWithoutChurchNestedInput {

    @Field(() => [AssignmentCreateWithoutChurchInput], {nullable:true})
    @Type(() => AssignmentCreateWithoutChurchInput)
    create?: Array<AssignmentCreateWithoutChurchInput>;

    @Field(() => [AssignmentCreateOrConnectWithoutChurchInput], {nullable:true})
    @Type(() => AssignmentCreateOrConnectWithoutChurchInput)
    connectOrCreate?: Array<AssignmentCreateOrConnectWithoutChurchInput>;

    @Field(() => [AssignmentUpsertWithWhereUniqueWithoutChurchInput], {nullable:true})
    @Type(() => AssignmentUpsertWithWhereUniqueWithoutChurchInput)
    upsert?: Array<AssignmentUpsertWithWhereUniqueWithoutChurchInput>;

    @Field(() => AssignmentCreateManyChurchInputEnvelope, {nullable:true})
    @Type(() => AssignmentCreateManyChurchInputEnvelope)
    createMany?: AssignmentCreateManyChurchInputEnvelope;

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

    @Field(() => [AssignmentUpdateWithWhereUniqueWithoutChurchInput], {nullable:true})
    @Type(() => AssignmentUpdateWithWhereUniqueWithoutChurchInput)
    update?: Array<AssignmentUpdateWithWhereUniqueWithoutChurchInput>;

    @Field(() => [AssignmentUpdateManyWithWhereWithoutChurchInput], {nullable:true})
    @Type(() => AssignmentUpdateManyWithWhereWithoutChurchInput)
    updateMany?: Array<AssignmentUpdateManyWithWhereWithoutChurchInput>;

    @Field(() => [AssignmentScalarWhereInput], {nullable:true})
    @Type(() => AssignmentScalarWhereInput)
    deleteMany?: Array<AssignmentScalarWhereInput>;
}
