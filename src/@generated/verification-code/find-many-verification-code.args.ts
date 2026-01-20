import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VerificationCodeWhereInput } from './verification-code-where.input';
import { Type } from 'class-transformer';
import { VerificationCodeOrderByWithRelationInput } from './verification-code-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { VerificationCodeWhereUniqueInput } from './verification-code-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VerificationCodeScalarFieldEnum } from './verification-code-scalar-field.enum';

@ArgsType()
export class FindManyVerificationCodeArgs {

    @Field(() => VerificationCodeWhereInput, {nullable:true})
    @Type(() => VerificationCodeWhereInput)
    where?: VerificationCodeWhereInput;

    @Field(() => [VerificationCodeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VerificationCodeOrderByWithRelationInput>;

    @Field(() => VerificationCodeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<VerificationCodeWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [VerificationCodeScalarFieldEnum], {nullable:true})
    distinct?: Array<`${VerificationCodeScalarFieldEnum}`>;
}
