import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssignmentUpdateInput } from './assignment-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AssignmentWhereUniqueInput } from './assignment-where-unique.input';

@ArgsType()
export class UpdateOneAssignmentArgs {

    @Field(() => AssignmentUpdateInput, {nullable:false})
    @Type(() => AssignmentUpdateInput)
    data!: AssignmentUpdateInput;

    @Field(() => AssignmentWhereUniqueInput, {nullable:false})
    @Type(() => AssignmentWhereUniqueInput)
    where!: Prisma.AtLeast<AssignmentWhereUniqueInput, 'id' | 'church_id_date'>;
}
