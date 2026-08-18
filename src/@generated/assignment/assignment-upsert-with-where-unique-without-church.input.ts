import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AssignmentWhereUniqueInput } from './assignment-where-unique.input';
import { Type } from 'class-transformer';
import { AssignmentUpdateWithoutChurchInput } from './assignment-update-without-church.input';
import { AssignmentCreateWithoutChurchInput } from './assignment-create-without-church.input';

@InputType()
export class AssignmentUpsertWithWhereUniqueWithoutChurchInput {

    @Field(() => AssignmentWhereUniqueInput, {nullable:false})
    @Type(() => AssignmentWhereUniqueInput)
    where!: Prisma.AtLeast<AssignmentWhereUniqueInput, 'id' | 'church_id_date'>;

    @Field(() => AssignmentUpdateWithoutChurchInput, {nullable:false})
    @Type(() => AssignmentUpdateWithoutChurchInput)
    update!: AssignmentUpdateWithoutChurchInput;

    @Field(() => AssignmentCreateWithoutChurchInput, {nullable:false})
    @Type(() => AssignmentCreateWithoutChurchInput)
    create!: AssignmentCreateWithoutChurchInput;
}
