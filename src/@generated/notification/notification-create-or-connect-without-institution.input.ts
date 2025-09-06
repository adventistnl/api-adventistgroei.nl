import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationCreateWithoutInstitutionInput } from './notification-create-without-institution.input';

@InputType()
export class NotificationCreateOrConnectWithoutInstitutionInput {

    @Field(() => NotificationWhereUniqueInput, {nullable:false})
    @Type(() => NotificationWhereUniqueInput)
    where!: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;

    @Field(() => NotificationCreateWithoutInstitutionInput, {nullable:false})
    @Type(() => NotificationCreateWithoutInstitutionInput)
    create!: NotificationCreateWithoutInstitutionInput;
}
