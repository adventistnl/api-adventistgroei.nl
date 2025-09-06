import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunicationCreateManyAuthorInput } from './communication-create-many-author.input';
import { Type } from 'class-transformer';

@InputType()
export class CommunicationCreateManyAuthorInputEnvelope {

    @Field(() => [CommunicationCreateManyAuthorInput], {nullable:false})
    @Type(() => CommunicationCreateManyAuthorInput)
    data!: Array<CommunicationCreateManyAuthorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
