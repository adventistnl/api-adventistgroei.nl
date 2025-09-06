import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DirectMessageCreateManySenderInput } from './direct-message-create-many-sender.input';
import { Type } from 'class-transformer';

@InputType()
export class DirectMessageCreateManySenderInputEnvelope {

    @Field(() => [DirectMessageCreateManySenderInput], {nullable:false})
    @Type(() => DirectMessageCreateManySenderInput)
    data!: Array<DirectMessageCreateManySenderInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
