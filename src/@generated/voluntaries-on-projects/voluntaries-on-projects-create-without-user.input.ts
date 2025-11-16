import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateNestedOneWithoutVoluntary_usersInput } from '../project/project-create-nested-one-without-voluntary-users.input';
import { Type } from 'class-transformer';

@InputType()
export class VoluntariesOnProjectsCreateWithoutUserInput {

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {nullable:true})
    is_deleted?: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => ProjectCreateNestedOneWithoutVoluntary_usersInput, {nullable:false})
    @Type(() => ProjectCreateNestedOneWithoutVoluntary_usersInput)
    project!: ProjectCreateNestedOneWithoutVoluntary_usersInput;
}
