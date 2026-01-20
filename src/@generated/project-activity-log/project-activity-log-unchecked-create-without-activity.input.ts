import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityLogAction } from '../prisma/project-activity-log-action.enum';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class ProjectActivityLogUncheckedCreateWithoutActivityInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => ProjectActivityLogAction, {nullable:false})
    action!: `${ProjectActivityLogAction}`;

    @Field(() => String, {nullable:true})
    field_name?: string;

    @Field(() => String, {nullable:true})
    old_value?: string;

    @Field(() => String, {nullable:true})
    new_value?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;
}
