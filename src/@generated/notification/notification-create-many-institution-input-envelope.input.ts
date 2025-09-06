import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateManyInstitutionInput } from './notification-create-many-institution.input';
import { Type } from 'class-transformer';

@InputType()
export class NotificationCreateManyInstitutionInputEnvelope {

    @Field(() => [NotificationCreateManyInstitutionInput], {nullable:false})
    @Type(() => NotificationCreateManyInstitutionInput)
    data!: Array<NotificationCreateManyInstitutionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
