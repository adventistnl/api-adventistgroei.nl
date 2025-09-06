import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommunicationCreateManyInput } from './communication-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCommunicationArgs {

    @Field(() => [CommunicationCreateManyInput], {nullable:false})
    @Type(() => CommunicationCreateManyInput)
    data!: Array<CommunicationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
