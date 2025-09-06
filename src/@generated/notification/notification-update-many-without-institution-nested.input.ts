import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateWithoutInstitutionInput } from './notification-create-without-institution.input';
import { Type } from 'class-transformer';
import { NotificationCreateOrConnectWithoutInstitutionInput } from './notification-create-or-connect-without-institution.input';
import { NotificationUpsertWithWhereUniqueWithoutInstitutionInput } from './notification-upsert-with-where-unique-without-institution.input';
import { NotificationCreateManyInstitutionInputEnvelope } from './notification-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { NotificationUpdateWithWhereUniqueWithoutInstitutionInput } from './notification-update-with-where-unique-without-institution.input';
import { NotificationUpdateManyWithWhereWithoutInstitutionInput } from './notification-update-many-with-where-without-institution.input';
import { NotificationScalarWhereInput } from './notification-scalar-where.input';

@InputType()
export class NotificationUpdateManyWithoutInstitutionNestedInput {

    @Field(() => [NotificationCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => NotificationCreateWithoutInstitutionInput)
    create?: Array<NotificationCreateWithoutInstitutionInput>;

    @Field(() => [NotificationCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => NotificationCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<NotificationCreateOrConnectWithoutInstitutionInput>;

    @Field(() => [NotificationUpsertWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => NotificationUpsertWithWhereUniqueWithoutInstitutionInput)
    upsert?: Array<NotificationUpsertWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => NotificationCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => NotificationCreateManyInstitutionInputEnvelope)
    createMany?: NotificationCreateManyInstitutionInputEnvelope;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    set?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;

    @Field(() => [NotificationUpdateWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => NotificationUpdateWithWhereUniqueWithoutInstitutionInput)
    update?: Array<NotificationUpdateWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => [NotificationUpdateManyWithWhereWithoutInstitutionInput], {nullable:true})
    @Type(() => NotificationUpdateManyWithWhereWithoutInstitutionInput)
    updateMany?: Array<NotificationUpdateManyWithWhereWithoutInstitutionInput>;

    @Field(() => [NotificationScalarWhereInput], {nullable:true})
    @Type(() => NotificationScalarWhereInput)
    deleteMany?: Array<NotificationScalarWhereInput>;
}
