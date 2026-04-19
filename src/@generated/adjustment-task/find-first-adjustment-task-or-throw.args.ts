import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdjustmentTaskWhereInput } from './adjustment-task-where.input';
import { Type } from 'class-transformer';
import { AdjustmentTaskOrderByWithRelationInput } from './adjustment-task-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AdjustmentTaskWhereUniqueInput } from './adjustment-task-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AdjustmentTaskScalarFieldEnum } from './adjustment-task-scalar-field.enum';

@ArgsType()
export class FindFirstAdjustmentTaskOrThrowArgs {

    @Field(() => AdjustmentTaskWhereInput, {nullable:true})
    @Type(() => AdjustmentTaskWhereInput)
    where?: AdjustmentTaskWhereInput;

    @Field(() => [AdjustmentTaskOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AdjustmentTaskOrderByWithRelationInput>;

    @Field(() => AdjustmentTaskWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AdjustmentTaskWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AdjustmentTaskScalarFieldEnum], {nullable:true})
    distinct?: Array<`${AdjustmentTaskScalarFieldEnum}`>;
}
