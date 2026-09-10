import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssignmentHistoryWhereInput } from './assignment-history-where.input';
import { Type } from 'class-transformer';
import { AssignmentHistoryOrderByWithRelationInput } from './assignment-history-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AssignmentHistoryWhereUniqueInput } from './assignment-history-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AssignmentHistoryScalarFieldEnum } from './assignment-history-scalar-field.enum';

@ArgsType()
export class FindManyAssignmentHistoryArgs {

    @Field(() => AssignmentHistoryWhereInput, {nullable:true})
    @Type(() => AssignmentHistoryWhereInput)
    where?: AssignmentHistoryWhereInput;

    @Field(() => [AssignmentHistoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AssignmentHistoryOrderByWithRelationInput>;

    @Field(() => AssignmentHistoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AssignmentHistoryWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AssignmentHistoryScalarFieldEnum], {nullable:true})
    distinct?: Array<`${AssignmentHistoryScalarFieldEnum}`>;
}
