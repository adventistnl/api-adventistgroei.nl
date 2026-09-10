import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AssignmentWhereUniqueInput } from './assignment-where-unique.input';
import { Type } from 'class-transformer';
import { AssignmentUpdateWithoutUserInput } from './assignment-update-without-user.input';
import { AssignmentCreateWithoutUserInput } from './assignment-create-without-user.input';

@InputType()
export class AssignmentUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => AssignmentWhereUniqueInput, {nullable:false})
    @Type(() => AssignmentWhereUniqueInput)
    where!: Prisma.AtLeast<AssignmentWhereUniqueInput, 'id' | 'church_id_date'>;

    @Field(() => AssignmentUpdateWithoutUserInput, {nullable:false})
    @Type(() => AssignmentUpdateWithoutUserInput)
    update!: AssignmentUpdateWithoutUserInput;

    @Field(() => AssignmentCreateWithoutUserInput, {nullable:false})
    @Type(() => AssignmentCreateWithoutUserInput)
    create!: AssignmentCreateWithoutUserInput;
}
