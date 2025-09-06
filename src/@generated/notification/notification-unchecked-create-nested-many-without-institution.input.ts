import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateWithoutInstitutionInput } from './notification-create-without-institution.input';
import { Type } from 'class-transformer';
import { NotificationCreateOrConnectWithoutInstitutionInput } from './notification-create-or-connect-without-institution.input';
import { NotificationCreateManyInstitutionInputEnvelope } from './notification-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';

@InputType()
export class NotificationUncheckedCreateNestedManyWithoutInstitutionInput {

    @Field(() => [NotificationCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => NotificationCreateWithoutInstitutionInput)
    create?: Array<NotificationCreateWithoutInstitutionInput>;

    @Field(() => [NotificationCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => NotificationCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<NotificationCreateOrConnectWithoutInstitutionInput>;

    @Field(() => NotificationCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => NotificationCreateManyInstitutionInputEnvelope)
    createMany?: NotificationCreateManyInstitutionInputEnvelope;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;
}
