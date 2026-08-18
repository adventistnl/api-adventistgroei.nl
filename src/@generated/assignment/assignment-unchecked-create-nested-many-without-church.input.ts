import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentCreateWithoutChurchInput } from './assignment-create-without-church.input';
import { Type } from 'class-transformer';
import { AssignmentCreateOrConnectWithoutChurchInput } from './assignment-create-or-connect-without-church.input';
import { AssignmentCreateManyChurchInputEnvelope } from './assignment-create-many-church-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AssignmentWhereUniqueInput } from './assignment-where-unique.input';

@InputType()
export class AssignmentUncheckedCreateNestedManyWithoutChurchInput {

    @Field(() => [AssignmentCreateWithoutChurchInput], {nullable:true})
    @Type(() => AssignmentCreateWithoutChurchInput)
    create?: Array<AssignmentCreateWithoutChurchInput>;

    @Field(() => [AssignmentCreateOrConnectWithoutChurchInput], {nullable:true})
    @Type(() => AssignmentCreateOrConnectWithoutChurchInput)
    connectOrCreate?: Array<AssignmentCreateOrConnectWithoutChurchInput>;

    @Field(() => AssignmentCreateManyChurchInputEnvelope, {nullable:true})
    @Type(() => AssignmentCreateManyChurchInputEnvelope)
    createMany?: AssignmentCreateManyChurchInputEnvelope;

    @Field(() => [AssignmentWhereUniqueInput], {nullable:true})
    @Type(() => AssignmentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AssignmentWhereUniqueInput, 'id' | 'church_id_date'>>;
}
