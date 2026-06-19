import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutNotificationsInput } from './project-create-without-notifications.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutNotificationsInput } from './project-create-or-connect-without-notifications.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectCreateNestedOneWithoutNotificationsInput {

    @Field(() => ProjectCreateWithoutNotificationsInput, {nullable:true})
    @Type(() => ProjectCreateWithoutNotificationsInput)
    create?: ProjectCreateWithoutNotificationsInput;

    @Field(() => ProjectCreateOrConnectWithoutNotificationsInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutNotificationsInput)
    connectOrCreate?: ProjectCreateOrConnectWithoutNotificationsInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;
}
