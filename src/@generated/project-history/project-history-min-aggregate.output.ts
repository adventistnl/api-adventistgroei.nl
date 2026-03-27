import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProjectHistoryType } from '../prisma/project-history-type.enum';

@ObjectType()
export class ProjectHistoryMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    project_id?: string;

    @Field(() => String, {nullable:true})
    user_id?: string;

    @Field(() => ProjectHistoryType, {nullable:true})
    type?: `${ProjectHistoryType}`;

    @Field(() => String, {nullable:true})
    comment?: string;

    @Field(() => String, {nullable:true})
    field_name?: string;

    @Field(() => String, {nullable:true})
    old_value?: string;

    @Field(() => String, {nullable:true})
    new_value?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;
}
