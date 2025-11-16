import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VerificationCodeUpdateManyMutationInput } from './verification-code-update-many-mutation.input';
import { Type } from 'class-transformer';
import { VerificationCodeWhereInput } from './verification-code-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyVerificationCodeArgs {

    @Field(() => VerificationCodeUpdateManyMutationInput, {nullable:false})
    @Type(() => VerificationCodeUpdateManyMutationInput)
    data!: VerificationCodeUpdateManyMutationInput;

    @Field(() => VerificationCodeWhereInput, {nullable:true})
    @Type(() => VerificationCodeWhereInput)
    where?: VerificationCodeWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
