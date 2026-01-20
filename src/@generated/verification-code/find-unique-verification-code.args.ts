import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VerificationCodeWhereUniqueInput } from './verification-code-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueVerificationCodeArgs {

    @Field(() => VerificationCodeWhereUniqueInput, {nullable:false})
    @Type(() => VerificationCodeWhereUniqueInput)
    where!: Prisma.AtLeast<VerificationCodeWhereUniqueInput, 'id'>;
}
