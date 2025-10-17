import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsedTokensCreateManyInput } from './used-tokens-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUsedTokensArgs {

    @Field(() => [UsedTokensCreateManyInput], {nullable:false})
    @Type(() => UsedTokensCreateManyInput)
    data!: Array<UsedTokensCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
