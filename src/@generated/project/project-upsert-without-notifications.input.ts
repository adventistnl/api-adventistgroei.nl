import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectUpdateWithoutNotificationsInput } from './project-update-without-notifications.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutNotificationsInput } from './project-create-without-notifications.input';
import { ProjectWhereInput } from './project-where.input';

@InputType()
export class ProjectUpsertWithoutNotificationsInput {

    @Field(() => ProjectUpdateWithoutNotificationsInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutNotificationsInput)
    update!: ProjectUpdateWithoutNotificationsInput;

    @Field(() => ProjectCreateWithoutNotificationsInput, {nullable:false})
    @Type(() => ProjectCreateWithoutNotificationsInput)
    create!: ProjectCreateWithoutNotificationsInput;

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: ProjectWhereInput;
}
