import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateWithoutProjectInput } from './notification-create-without-project.input';
import { Type } from 'class-transformer';
import { NotificationCreateOrConnectWithoutProjectInput } from './notification-create-or-connect-without-project.input';
import { NotificationCreateManyProjectInputEnvelope } from './notification-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';

@InputType()
export class NotificationUncheckedCreateNestedManyWithoutProjectInput {

    @Field(() => [NotificationCreateWithoutProjectInput], {nullable:true})
    @Type(() => NotificationCreateWithoutProjectInput)
    create?: Array<NotificationCreateWithoutProjectInput>;

    @Field(() => [NotificationCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => NotificationCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<NotificationCreateOrConnectWithoutProjectInput>;

    @Field(() => NotificationCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => NotificationCreateManyProjectInputEnvelope)
    createMany?: NotificationCreateManyProjectInputEnvelope;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;
}
