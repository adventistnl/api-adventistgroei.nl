import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VerificationCodeCreateInput } from './verification-code-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneVerificationCodeArgs {

    @Field(() => VerificationCodeCreateInput, {nullable:false})
    @Type(() => VerificationCodeCreateInput)
    data!: VerificationCodeCreateInput;
}
