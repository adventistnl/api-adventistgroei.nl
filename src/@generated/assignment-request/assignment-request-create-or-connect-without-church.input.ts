import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AssignmentRequestWhereUniqueInput } from './assignment-request-where-unique.input';
import { Type } from 'class-transformer';
import { AssignmentRequestCreateWithoutChurchInput } from './assignment-request-create-without-church.input';

@InputType()
export class AssignmentRequestCreateOrConnectWithoutChurchInput {

    @Field(() => AssignmentRequestWhereUniqueInput, {nullable:false})
    @Type(() => AssignmentRequestWhereUniqueInput)
    where!: Prisma.AtLeast<AssignmentRequestWhereUniqueInput, 'id'>;

    @Field(() => AssignmentRequestCreateWithoutChurchInput, {nullable:false})
    @Type(() => AssignmentRequestCreateWithoutChurchInput)
    create!: AssignmentRequestCreateWithoutChurchInput;
}
