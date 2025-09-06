import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionWhereInput } from './institution-where.input';
import { Type } from 'class-transformer';
import { InstitutionUpdateWithoutNotificationsInput } from './institution-update-without-notifications.input';

@InputType()
export class InstitutionUpdateToOneWithWhereWithoutNotificationsInput {

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;

    @Field(() => InstitutionUpdateWithoutNotificationsInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutNotificationsInput)
    data!: InstitutionUpdateWithoutNotificationsInput;
}
