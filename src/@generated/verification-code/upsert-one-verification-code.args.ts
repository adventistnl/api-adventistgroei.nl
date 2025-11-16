import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VerificationCodeWhereUniqueInput } from './verification-code-where-unique.input';
import { Type } from 'class-transformer';
import { VerificationCodeCreateInput } from './verification-code-create.input';
import { VerificationCodeUpdateInput } from './verification-code-update.input';

@ArgsType()
export class UpsertOneVerificationCodeArgs {

    @Field(() => VerificationCodeWhereUniqueInput, {nullable:false})
    @Type(() => VerificationCodeWhereUniqueInput)
    where!: Prisma.AtLeast<VerificationCodeWhereUniqueInput, 'id'>;

    @Field(() => VerificationCodeCreateInput, {nullable:false})
    @Type(() => VerificationCodeCreateInput)
    create!: VerificationCodeCreateInput;

    @Field(() => VerificationCodeUpdateInput, {nullable:false})
    @Type(() => VerificationCodeUpdateInput)
    update!: VerificationCodeUpdateInput;
}
