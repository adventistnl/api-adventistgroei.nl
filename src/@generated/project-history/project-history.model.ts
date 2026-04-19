import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ProjectHistoryType } from '../prisma/project-history-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { Project } from '../project/project.model';
import { User } from '../user/user.model';
import { ProjectAdjustment } from '../project-adjustment/project-adjustment.model';

@ObjectType()
export class ProjectHistory {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    project_id!: string;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => ProjectHistoryType, {nullable:false})
    type!: `${ProjectHistoryType}`;

    @Field(() => String, {nullable:true})
    comment!: string | null;

    @Field(() => String, {nullable:true})
    field_name!: string | null;

    @Field(() => String, {nullable:true})
    old_value!: string | null;

    @Field(() => String, {nullable:true})
    new_value!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata!: any | null;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Project, {nullable:false})
    project?: Project;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => ProjectAdjustment, {nullable:true})
    adjustment?: ProjectAdjustment | null;
}
