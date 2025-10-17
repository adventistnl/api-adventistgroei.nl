import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsedTokensUpdateManyMutationInput } from './used-tokens-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UsedTokensWhereInput } from './used-tokens-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyUsedTokensArgs {

    @Field(() => UsedTokensUpdateManyMutationInput, {nullable:false})
    @Type(() => UsedTokensUpdateManyMutationInput)
    data!: UsedTokensUpdateManyMutationInput;

    @Field(() => UsedTokensWhereInput, {nullable:true})
    @Type(() => UsedTokensWhereInput)
    where?: UsedTokensWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
