import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AssignmentWhereUniqueInput } from './assignment-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAssignmentArgs {

    @Field(() => AssignmentWhereUniqueInput, {nullable:false})
    @Type(() => AssignmentWhereUniqueInput)
    where!: Prisma.AtLeast<AssignmentWhereUniqueInput, 'id' | 'church_id_date'>;
}
