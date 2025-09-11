import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VoluntariesOnProjectsUser_idProject_idCompoundUniqueInput } from './voluntaries-on-projects-user-id-project-id-compound-unique.input';
import { VoluntariesOnProjectsWhereInput } from './voluntaries-on-projects-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { ProjectScalarRelationFilter } from '../project/project-scalar-relation-filter.input';

@InputType()
export class VoluntariesOnProjectsWhereUniqueInput {

    @Field(() => VoluntariesOnProjectsUser_idProject_idCompoundUniqueInput, {nullable:true})
    user_id_project_id?: VoluntariesOnProjectsUser_idProject_idCompoundUniqueInput;

    @Field(() => [VoluntariesOnProjectsWhereInput], {nullable:true})
    AND?: Array<VoluntariesOnProjectsWhereInput>;

    @Field(() => [VoluntariesOnProjectsWhereInput], {nullable:true})
    OR?: Array<VoluntariesOnProjectsWhereInput>;

    @Field(() => [VoluntariesOnProjectsWhereInput], {nullable:true})
    NOT?: Array<VoluntariesOnProjectsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    user_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    project_id?: StringFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    @Type(() => UserScalarRelationFilter)
    user?: UserScalarRelationFilter;

    @Field(() => ProjectScalarRelationFilter, {nullable:true})
    @Type(() => ProjectScalarRelationFilter)
    project?: ProjectScalarRelationFilter;
}
