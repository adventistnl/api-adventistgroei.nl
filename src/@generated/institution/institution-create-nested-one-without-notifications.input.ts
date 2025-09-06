import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutNotificationsInput } from './institution-create-without-notifications.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutNotificationsInput } from './institution-create-or-connect-without-notifications.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';

@InputType()
export class InstitutionCreateNestedOneWithoutNotificationsInput {

    @Field(() => InstitutionCreateWithoutNotificationsInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutNotificationsInput)
    create?: InstitutionCreateWithoutNotificationsInput;

    @Field(() => InstitutionCreateOrConnectWithoutNotificationsInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutNotificationsInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutNotificationsInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;
}
