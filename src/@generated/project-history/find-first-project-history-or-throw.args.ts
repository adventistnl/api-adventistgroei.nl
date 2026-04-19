import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectHistoryWhereInput } from './project-history-where.input';
import { Type } from 'class-transformer';
import { ProjectHistoryOrderByWithRelationInput } from './project-history-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProjectHistoryWhereUniqueInput } from './project-history-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProjectHistoryScalarFieldEnum } from './project-history-scalar-field.enum';

@ArgsType()
export class FindFirstProjectHistoryOrThrowArgs {

    @Field(() => ProjectHistoryWhereInput, {nullable:true})
    @Type(() => ProjectHistoryWhereInput)
    where?: ProjectHistoryWhereInput;

    @Field(() => [ProjectHistoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProjectHistoryOrderByWithRelationInput>;

    @Field(() => ProjectHistoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProjectHistoryWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProjectHistoryScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ProjectHistoryScalarFieldEnum}`>;
}
