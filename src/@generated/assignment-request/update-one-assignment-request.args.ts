import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssignmentRequestUpdateInput } from './assignment-request-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AssignmentRequestWhereUniqueInput } from './assignment-request-where-unique.input';

@ArgsType()
export class UpdateOneAssignmentRequestArgs {

    @Field(() => AssignmentRequestUpdateInput, {nullable:false})
    @Type(() => AssignmentRequestUpdateInput)
    data!: AssignmentRequestUpdateInput;

    @Field(() => AssignmentRequestWhereUniqueInput, {nullable:false})
    @Type(() => AssignmentRequestWhereUniqueInput)
    where!: Prisma.AtLeast<AssignmentRequestWhereUniqueInput, 'id'>;
}
