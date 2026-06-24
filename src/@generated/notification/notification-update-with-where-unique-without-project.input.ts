import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationUpdateWithoutProjectInput } from './notification-update-without-project.input';

@InputType()
export class NotificationUpdateWithWhereUniqueWithoutProjectInput {

    @Field(() => NotificationWhereUniqueInput, {nullable:false})
    @Type(() => NotificationWhereUniqueInput)
    where!: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;

    @Field(() => NotificationUpdateWithoutProjectInput, {nullable:false})
    @Type(() => NotificationUpdateWithoutProjectInput)
    data!: NotificationUpdateWithoutProjectInput;
}
