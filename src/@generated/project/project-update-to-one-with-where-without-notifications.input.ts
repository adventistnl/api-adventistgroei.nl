import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereInput } from './project-where.input';
import { Type } from 'class-transformer';
import { ProjectUpdateWithoutNotificationsInput } from './project-update-without-notifications.input';

@InputType()
export class ProjectUpdateToOneWithWhereWithoutNotificationsInput {

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: ProjectWhereInput;

    @Field(() => ProjectUpdateWithoutNotificationsInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutNotificationsInput)
    data!: ProjectUpdateWithoutNotificationsInput;
}
