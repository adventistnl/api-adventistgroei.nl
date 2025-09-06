import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommunicationRecipientCreateManyInput } from './communication-recipient-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCommunicationRecipientArgs {

    @Field(() => [CommunicationRecipientCreateManyInput], {nullable:false})
    @Type(() => CommunicationRecipientCreateManyInput)
    data!: Array<CommunicationRecipientCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
