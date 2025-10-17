import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsedTokensWhereInput } from './used-tokens-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyUsedTokensArgs {

    @Field(() => UsedTokensWhereInput, {nullable:true})
    @Type(() => UsedTokensWhereInput)
    where?: UsedTokensWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
