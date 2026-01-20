import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectActivityLogWhereInput } from './project-activity-log-where.input';
import { Type } from 'class-transformer';
import { ProjectActivityLogOrderByWithRelationInput } from './project-activity-log-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProjectActivityLogWhereUniqueInput } from './project-activity-log-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProjectActivityLogScalarFieldEnum } from './project-activity-log-scalar-field.enum';

@ArgsType()
export class FindFirstProjectActivityLogOrThrowArgs {

    @Field(() => ProjectActivityLogWhereInput, {nullable:true})
    @Type(() => ProjectActivityLogWhereInput)
    where?: ProjectActivityLogWhereInput;

    @Field(() => [ProjectActivityLogOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProjectActivityLogOrderByWithRelationInput>;

    @Field(() => ProjectActivityLogWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProjectActivityLogWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProjectActivityLogScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ProjectActivityLogScalarFieldEnum}`>;
}
