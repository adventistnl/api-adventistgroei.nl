import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutNotificationsInput } from './project-create-without-notifications.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutNotificationsInput } from './project-create-or-connect-without-notifications.input';
import { ProjectUpsertWithoutNotificationsInput } from './project-upsert-without-notifications.input';
import { ProjectWhereInput } from './project-where.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateToOneWithWhereWithoutNotificationsInput } from './project-update-to-one-with-where-without-notifications.input';

@InputType()
export class ProjectUpdateOneWithoutNotificationsNestedInput {

    @Field(() => ProjectCreateWithoutNotificationsInput, {nullable:true})
    @Type(() => ProjectCreateWithoutNotificationsInput)
    create?: ProjectCreateWithoutNotificationsInput;

    @Field(() => ProjectCreateOrConnectWithoutNotificationsInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutNotificationsInput)
    connectOrCreate?: ProjectCreateOrConnectWithoutNotificationsInput;

    @Field(() => ProjectUpsertWithoutNotificationsInput, {nullable:true})
    @Type(() => ProjectUpsertWithoutNotificationsInput)
    upsert?: ProjectUpsertWithoutNotificationsInput;

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    disconnect?: ProjectWhereInput;

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    delete?: ProjectWhereInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectUpdateToOneWithWhereWithoutNotificationsInput, {nullable:true})
    @Type(() => ProjectUpdateToOneWithWhereWithoutNotificationsInput)
    update?: ProjectUpdateToOneWithWhereWithoutNotificationsInput;
}
