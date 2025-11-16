import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class VerificationCodeWhereInput {

    @Field(() => [VerificationCodeWhereInput], {nullable:true})
    AND?: Array<VerificationCodeWhereInput>;

    @Field(() => [VerificationCodeWhereInput], {nullable:true})
    OR?: Array<VerificationCodeWhereInput>;

    @Field(() => [VerificationCodeWhereInput], {nullable:true})
    NOT?: Array<VerificationCodeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    expiresAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    attempts?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    used?: BoolFilter;
}
