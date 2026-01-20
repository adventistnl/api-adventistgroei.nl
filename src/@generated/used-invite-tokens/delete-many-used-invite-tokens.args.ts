import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsedInviteTokensWhereInput } from './used-invite-tokens-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyUsedInviteTokensArgs {

    @Field(() => UsedInviteTokensWhereInput, {nullable:true})
    @Type(() => UsedInviteTokensWhereInput)
    where?: UsedInviteTokensWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
