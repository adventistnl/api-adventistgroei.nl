import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VerificationCodeUpdateInput } from './verification-code-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { VerificationCodeWhereUniqueInput } from './verification-code-where-unique.input';

@ArgsType()
export class UpdateOneVerificationCodeArgs {

    @Field(() => VerificationCodeUpdateInput, {nullable:false})
    @Type(() => VerificationCodeUpdateInput)
    data!: VerificationCodeUpdateInput;

    @Field(() => VerificationCodeWhereUniqueInput, {nullable:false})
    @Type(() => VerificationCodeWhereUniqueInput)
    where!: Prisma.AtLeast<VerificationCodeWhereUniqueInput, 'id'>;
}
