import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutNotificationsInput } from './institution-create-without-notifications.input';

@InputType()
export class InstitutionCreateOrConnectWithoutNotificationsInput {

    @Field(() => InstitutionWhereUniqueInput, {nullable:false})
    @Type(() => InstitutionWhereUniqueInput)
    where!: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionCreateWithoutNotificationsInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutNotificationsInput)
    create!: InstitutionCreateWithoutNotificationsInput;
}
