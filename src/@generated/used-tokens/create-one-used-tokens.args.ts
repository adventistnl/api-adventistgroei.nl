import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsedTokensCreateInput } from './used-tokens-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUsedTokensArgs {

    @Field(() => UsedTokensCreateInput, {nullable:false})
    @Type(() => UsedTokensCreateInput)
    data!: UsedTokensCreateInput;
}
