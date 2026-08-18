import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AssignmentRequestWhereUniqueInput } from './assignment-request-where-unique.input';
import { Type } from 'class-transformer';
import { AssignmentRequestUpdateWithoutUserInput } from './assignment-request-update-without-user.input';
import { AssignmentRequestCreateWithoutUserInput } from './assignment-request-create-without-user.input';

@InputType()
export class AssignmentRequestUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => AssignmentRequestWhereUniqueInput, {nullable:false})
    @Type(() => AssignmentRequestWhereUniqueInput)
    where!: Prisma.AtLeast<AssignmentRequestWhereUniqueInput, 'id'>;

    @Field(() => AssignmentRequestUpdateWithoutUserInput, {nullable:false})
    @Type(() => AssignmentRequestUpdateWithoutUserInput)
    update!: AssignmentRequestUpdateWithoutUserInput;

    @Field(() => AssignmentRequestCreateWithoutUserInput, {nullable:false})
    @Type(() => AssignmentRequestCreateWithoutUserInput)
    create!: AssignmentRequestCreateWithoutUserInput;
}
