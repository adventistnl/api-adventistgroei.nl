import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AssignmentRequestWhereUniqueInput } from './assignment-request-where-unique.input';
import { Type } from 'class-transformer';
import { AssignmentRequestUpdateWithoutChurchInput } from './assignment-request-update-without-church.input';

@InputType()
export class AssignmentRequestUpdateWithWhereUniqueWithoutChurchInput {

    @Field(() => AssignmentRequestWhereUniqueInput, {nullable:false})
    @Type(() => AssignmentRequestWhereUniqueInput)
    where!: Prisma.AtLeast<AssignmentRequestWhereUniqueInput, 'id'>;

    @Field(() => AssignmentRequestUpdateWithoutChurchInput, {nullable:false})
    @Type(() => AssignmentRequestUpdateWithoutChurchInput)
    data!: AssignmentRequestUpdateWithoutChurchInput;
}
