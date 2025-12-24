import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectActivityAssigneeWhereInput } from './project-activity-assignee-where.input';
import { Type } from 'class-transformer';
import { ProjectActivityAssigneeOrderByWithRelationInput } from './project-activity-assignee-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProjectActivityAssigneeWhereUniqueInput } from './project-activity-assignee-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProjectActivityAssigneeScalarFieldEnum } from './project-activity-assignee-scalar-field.enum';

@ArgsType()
export class FindManyProjectActivityAssigneeArgs {

    @Field(() => ProjectActivityAssigneeWhereInput, {nullable:true})
    @Type(() => ProjectActivityAssigneeWhereInput)
    where?: ProjectActivityAssigneeWhereInput;

    @Field(() => [ProjectActivityAssigneeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProjectActivityAssigneeOrderByWithRelationInput>;

    @Field(() => ProjectActivityAssigneeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProjectActivityAssigneeWhereUniqueInput, 'id' | 'activity_id_user_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProjectActivityAssigneeScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ProjectActivityAssigneeScalarFieldEnum}`>;
}
