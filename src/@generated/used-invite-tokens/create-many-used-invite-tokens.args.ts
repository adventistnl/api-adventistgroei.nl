import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsedInviteTokensCreateManyInput } from './used-invite-tokens-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUsedInviteTokensArgs {

    @Field(() => [UsedInviteTokensCreateManyInput], {nullable:false})
    @Type(() => UsedInviteTokensCreateManyInput)
    data!: Array<UsedInviteTokensCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
