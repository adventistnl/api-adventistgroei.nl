import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutNotificationsInput } from './institution-create-without-notifications.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutNotificationsInput } from './institution-create-or-connect-without-notifications.input';
import { InstitutionUpsertWithoutNotificationsInput } from './institution-upsert-without-notifications.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { InstitutionUpdateToOneWithWhereWithoutNotificationsInput } from './institution-update-to-one-with-where-without-notifications.input';

@InputType()
export class InstitutionUpdateOneRequiredWithoutNotificationsNestedInput {

    @Field(() => InstitutionCreateWithoutNotificationsInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutNotificationsInput)
    create?: InstitutionCreateWithoutNotificationsInput;

    @Field(() => InstitutionCreateOrConnectWithoutNotificationsInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutNotificationsInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutNotificationsInput;

    @Field(() => InstitutionUpsertWithoutNotificationsInput, {nullable:true})
    @Type(() => InstitutionUpsertWithoutNotificationsInput)
    upsert?: InstitutionUpsertWithoutNotificationsInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionUpdateToOneWithWhereWithoutNotificationsInput, {nullable:true})
    @Type(() => InstitutionUpdateToOneWithWhereWithoutNotificationsInput)
    update?: InstitutionUpdateToOneWithWhereWithoutNotificationsInput;
}
