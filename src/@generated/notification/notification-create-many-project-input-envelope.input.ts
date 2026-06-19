import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateManyProjectInput } from './notification-create-many-project.input';
import { Type } from 'class-transformer';

@InputType()
export class NotificationCreateManyProjectInputEnvelope {

    @Field(() => [NotificationCreateManyProjectInput], {nullable:false})
    @Type(() => NotificationCreateManyProjectInput)
    data!: Array<NotificationCreateManyProjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
