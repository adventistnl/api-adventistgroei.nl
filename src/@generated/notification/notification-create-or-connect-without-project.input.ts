import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationCreateWithoutProjectInput } from './notification-create-without-project.input';

@InputType()
export class NotificationCreateOrConnectWithoutProjectInput {

    @Field(() => NotificationWhereUniqueInput, {nullable:false})
    @Type(() => NotificationWhereUniqueInput)
    where!: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;

    @Field(() => NotificationCreateWithoutProjectInput, {nullable:false})
    @Type(() => NotificationCreateWithoutProjectInput)
    create!: NotificationCreateWithoutProjectInput;
}
