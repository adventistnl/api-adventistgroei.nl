import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VerificationCodeCreateManyInput } from './verification-code-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyVerificationCodeArgs {

    @Field(() => [VerificationCodeCreateManyInput], {nullable:false})
    @Type(() => VerificationCodeCreateManyInput)
    data!: Array<VerificationCodeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
