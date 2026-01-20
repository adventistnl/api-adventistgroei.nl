import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UsedInviteTokensCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => Date, {nullable:true})
    usedAt?: Date | string;

    @Field(() => Date, {nullable:false})
    tokenExpiresAt!: Date | string;
}
