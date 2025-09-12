import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectActivityWhereInput } from './project-activity-where.input';
import { Type } from 'class-transformer';
import { ProjectActivityOrderByWithRelationInput } from './project-activity-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProjectActivityWhereUniqueInput } from './project-activity-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProjectActivityScalarFieldEnum } from './project-activity-scalar-field.enum';

@ArgsType()
export class FindFirstProjectActivityArgs {

    @Field(() => ProjectActivityWhereInput, {nullable:true})
    @Type(() => ProjectActivityWhereInput)
    where?: ProjectActivityWhereInput;

    @Field(() => [ProjectActivityOrderByWithRelationInput], {nullable:true})
    @Type(() => ProjectActivityOrderByWithRelationInput)
    orderBy?: Array<ProjectActivityOrderByWithRelationInput>;

    @Field(() => ProjectActivityWhereUniqueInput, {nullable:true})
    @Type(() => ProjectActivityWhereUniqueInput)
    cursor?: Prisma.AtLeast<ProjectActivityWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProjectActivityScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ProjectActivityScalarFieldEnum}`>;
}
