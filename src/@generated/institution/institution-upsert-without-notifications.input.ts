import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionUpdateWithoutNotificationsInput } from './institution-update-without-notifications.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutNotificationsInput } from './institution-create-without-notifications.input';
import { InstitutionWhereInput } from './institution-where.input';

@InputType()
export class InstitutionUpsertWithoutNotificationsInput {

    @Field(() => InstitutionUpdateWithoutNotificationsInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutNotificationsInput)
    update!: InstitutionUpdateWithoutNotificationsInput;

    @Field(() => InstitutionCreateWithoutNotificationsInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutNotificationsInput)
    create!: InstitutionCreateWithoutNotificationsInput;

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;
}
