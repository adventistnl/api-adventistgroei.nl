import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AssignmentRequestWhereUniqueInput } from './assignment-request-where-unique.input';
import { Type } from 'class-transformer';
import { AssignmentRequestUpdateWithoutTemplateInput } from './assignment-request-update-without-template.input';
import { AssignmentRequestCreateWithoutTemplateInput } from './assignment-request-create-without-template.input';

@InputType()
export class AssignmentRequestUpsertWithWhereUniqueWithoutTemplateInput {

    @Field(() => AssignmentRequestWhereUniqueInput, {nullable:false})
    @Type(() => AssignmentRequestWhereUniqueInput)
    where!: Prisma.AtLeast<AssignmentRequestWhereUniqueInput, 'id'>;

    @Field(() => AssignmentRequestUpdateWithoutTemplateInput, {nullable:false})
    @Type(() => AssignmentRequestUpdateWithoutTemplateInput)
    update!: AssignmentRequestUpdateWithoutTemplateInput;

    @Field(() => AssignmentRequestCreateWithoutTemplateInput, {nullable:false})
    @Type(() => AssignmentRequestCreateWithoutTemplateInput)
    create!: AssignmentRequestCreateWithoutTemplateInput;
}
