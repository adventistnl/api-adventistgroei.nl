import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateWithoutProjectInput } from './notification-create-without-project.input';
import { Type } from 'class-transformer';
import { NotificationCreateOrConnectWithoutProjectInput } from './notification-create-or-connect-without-project.input';
import { NotificationUpsertWithWhereUniqueWithoutProjectInput } from './notification-upsert-with-where-unique-without-project.input';
import { NotificationCreateManyProjectInputEnvelope } from './notification-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { NotificationUpdateWithWhereUniqueWithoutProjectInput } from './notification-update-with-where-unique-without-project.input';
import { NotificationUpdateManyWithWhereWithoutProjectInput } from './notification-update-many-with-where-without-project.input';
import { NotificationScalarWhereInput } from './notification-scalar-where.input';

@InputType()
export class NotificationUpdateManyWithoutProjectNestedInput {

    @Field(() => [NotificationCreateWithoutProjectInput], {nullable:true})
    @Type(() => NotificationCreateWithoutProjectInput)
    create?: Array<NotificationCreateWithoutProjectInput>;

    @Field(() => [NotificationCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => NotificationCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<NotificationCreateOrConnectWithoutProjectInput>;

    @Field(() => [NotificationUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => NotificationUpsertWithWhereUniqueWithoutProjectInput)
    upsert?: Array<NotificationUpsertWithWhereUniqueWithoutProjectInput>;

    @Field(() => NotificationCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => NotificationCreateManyProjectInputEnvelope)
    createMany?: NotificationCreateManyProjectInputEnvelope;

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

    @Field(() => [NotificationUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => NotificationUpdateWithWhereUniqueWithoutProjectInput)
    update?: Array<NotificationUpdateWithWhereUniqueWithoutProjectInput>;

    @Field(() => [NotificationUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    @Type(() => NotificationUpdateManyWithWhereWithoutProjectInput)
    updateMany?: Array<NotificationUpdateManyWithWhereWithoutProjectInput>;

    @Field(() => [NotificationScalarWhereInput], {nullable:true})
    @Type(() => NotificationScalarWhereInput)
    deleteMany?: Array<NotificationScalarWhereInput>;
}
