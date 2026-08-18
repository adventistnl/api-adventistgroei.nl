import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssignmentWhereInput } from './assignment-where.input';
import { Type } from 'class-transformer';
import { AssignmentOrderByWithRelationInput } from './assignment-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AssignmentWhereUniqueInput } from './assignment-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AssignmentScalarFieldEnum } from './assignment-scalar-field.enum';

@ArgsType()
export class FindFirstAssignmentOrThrowArgs {

    @Field(() => AssignmentWhereInput, {nullable:true})
    @Type(() => AssignmentWhereInput)
    where?: AssignmentWhereInput;

    @Field(() => [AssignmentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AssignmentOrderByWithRelationInput>;

    @Field(() => AssignmentWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AssignmentWhereUniqueInput, 'id' | 'church_id_date'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AssignmentScalarFieldEnum], {nullable:true})
    distinct?: Array<`${AssignmentScalarFieldEnum}`>;
}
