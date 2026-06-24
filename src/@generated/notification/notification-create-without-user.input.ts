import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { InstitutionCreateNestedOneWithoutNotificationsInput } from '../institution/institution-create-nested-one-without-notifications.input';
import { Type } from 'class-transformer';
import { ProjectCreateNestedOneWithoutNotificationsInput } from '../project/project-create-nested-one-without-notifications.input';

@InputType()
export class NotificationCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:false})
    message!: string;

    @Field(() => Boolean, {nullable:true})
    read_status?: boolean;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

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

    @Field(() => InstitutionCreateNestedOneWithoutNotificationsInput, {nullable:false})
    @Type(() => InstitutionCreateNestedOneWithoutNotificationsInput)
    institution!: InstitutionCreateNestedOneWithoutNotificationsInput;

    @Field(() => ProjectCreateNestedOneWithoutNotificationsInput, {nullable:true})
    @Type(() => ProjectCreateNestedOneWithoutNotificationsInput)
    project?: ProjectCreateNestedOneWithoutNotificationsInput;
}
