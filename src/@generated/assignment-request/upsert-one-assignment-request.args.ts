import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AssignmentRequestWhereUniqueInput } from './assignment-request-where-unique.input';
import { Type } from 'class-transformer';
import { AssignmentRequestCreateInput } from './assignment-request-create.input';
import { AssignmentRequestUpdateInput } from './assignment-request-update.input';

@ArgsType()
export class UpsertOneAssignmentRequestArgs {

    @Field(() => AssignmentRequestWhereUniqueInput, {nullable:false})
    @Type(() => AssignmentRequestWhereUniqueInput)
    where!: Prisma.AtLeast<AssignmentRequestWhereUniqueInput, 'id'>;

    @Field(() => AssignmentRequestCreateInput, {nullable:false})
    @Type(() => AssignmentRequestCreateInput)
    create!: AssignmentRequestCreateInput;

    @Field(() => AssignmentRequestUpdateInput, {nullable:false})
    @Type(() => AssignmentRequestUpdateInput)
    update!: AssignmentRequestUpdateInput;
}
