import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationUpdateWithoutInstitutionInput } from './notification-update-without-institution.input';

@InputType()
export class NotificationUpdateWithWhereUniqueWithoutInstitutionInput {

    @Field(() => NotificationWhereUniqueInput, {nullable:false})
    @Type(() => NotificationWhereUniqueInput)
    where!: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;

    @Field(() => NotificationUpdateWithoutInstitutionInput, {nullable:false})
    @Type(() => NotificationUpdateWithoutInstitutionInput)
    data!: NotificationUpdateWithoutInstitutionInput;
}
