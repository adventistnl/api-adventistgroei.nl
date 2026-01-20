import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VerificationCodeWhereInput } from './verification-code-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyVerificationCodeArgs {

    @Field(() => VerificationCodeWhereInput, {nullable:true})
    @Type(() => VerificationCodeWhereInput)
    where?: VerificationCodeWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
