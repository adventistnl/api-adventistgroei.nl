import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DirectMessageCreateManyInput } from './direct-message-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDirectMessageArgs {

    @Field(() => [DirectMessageCreateManyInput], {nullable:false})
    @Type(() => DirectMessageCreateManyInput)
    data!: Array<DirectMessageCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
