import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentCreateWithoutUserInput } from './assignment-create-without-user.input';
import { Type } from 'class-transformer';
import { AssignmentCreateOrConnectWithoutUserInput } from './assignment-create-or-connect-without-user.input';
import { AssignmentCreateManyUserInputEnvelope } from './assignment-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AssignmentWhereUniqueInput } from './assignment-where-unique.input';

@InputType()
export class AssignmentCreateNestedManyWithoutUserInput {

    @Field(() => [AssignmentCreateWithoutUserInput], {nullable:true})
    @Type(() => AssignmentCreateWithoutUserInput)
    create?: Array<AssignmentCreateWithoutUserInput>;

    @Field(() => [AssignmentCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AssignmentCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AssignmentCreateOrConnectWithoutUserInput>;

    @Field(() => AssignmentCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AssignmentCreateManyUserInputEnvelope)
    createMany?: AssignmentCreateManyUserInputEnvelope;

    @Field(() => [AssignmentWhereUniqueInput], {nullable:true})
    @Type(() => AssignmentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AssignmentWhereUniqueInput, 'id' | 'church_id_date'>>;
}
