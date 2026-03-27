import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectAdjustmentWhereInput } from './project-adjustment-where.input';
import { Type } from 'class-transformer';
import { ProjectAdjustmentOrderByWithRelationInput } from './project-adjustment-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProjectAdjustmentWhereUniqueInput } from './project-adjustment-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProjectAdjustmentScalarFieldEnum } from './project-adjustment-scalar-field.enum';

@ArgsType()
export class FindFirstProjectAdjustmentArgs {

    @Field(() => ProjectAdjustmentWhereInput, {nullable:true})
    @Type(() => ProjectAdjustmentWhereInput)
    where?: ProjectAdjustmentWhereInput;

    @Field(() => [ProjectAdjustmentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProjectAdjustmentOrderByWithRelationInput>;

    @Field(() => ProjectAdjustmentWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProjectAdjustmentWhereUniqueInput, 'id' | 'project_history_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProjectAdjustmentScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ProjectAdjustmentScalarFieldEnum}`>;
}
