import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DirectMessageRecipientCreateManyInput } from './direct-message-recipient-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDirectMessageRecipientArgs {

    @Field(() => [DirectMessageRecipientCreateManyInput], {nullable:false})
    @Type(() => DirectMessageRecipientCreateManyInput)
    data!: Array<DirectMessageRecipientCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
