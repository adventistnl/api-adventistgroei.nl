import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssignmentRequestWhereInput } from './assignment-request-where.input';
import { Type } from 'class-transformer';
import { AssignmentRequestOrderByWithRelationInput } from './assignment-request-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AssignmentRequestWhereUniqueInput } from './assignment-request-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AssignmentRequestScalarFieldEnum } from './assignment-request-scalar-field.enum';

@ArgsType()
export class FindManyAssignmentRequestArgs {

    @Field(() => AssignmentRequestWhereInput, {nullable:true})
    @Type(() => AssignmentRequestWhereInput)
    where?: AssignmentRequestWhereInput;

    @Field(() => [AssignmentRequestOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AssignmentRequestOrderByWithRelationInput>;

    @Field(() => AssignmentRequestWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AssignmentRequestWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AssignmentRequestScalarFieldEnum], {nullable:true})
    distinct?: Array<`${AssignmentRequestScalarFieldEnum}`>;
}
