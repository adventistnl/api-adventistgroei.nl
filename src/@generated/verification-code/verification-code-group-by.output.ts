import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VerificationCodeCountAggregate } from './verification-code-count-aggregate.output';
import { VerificationCodeAvgAggregate } from './verification-code-avg-aggregate.output';
import { VerificationCodeSumAggregate } from './verification-code-sum-aggregate.output';
import { VerificationCodeMinAggregate } from './verification-code-min-aggregate.output';
import { VerificationCodeMaxAggregate } from './verification-code-max-aggregate.output';

@ObjectType()
export class VerificationCodeGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;

    @Field(() => Int, {nullable:false})
    attempts!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Boolean, {nullable:false})
    used!: boolean;

    @Field(() => VerificationCodeCountAggregate, {nullable:true})
    _count?: VerificationCodeCountAggregate;

    @Field(() => VerificationCodeAvgAggregate, {nullable:true})
    _avg?: VerificationCodeAvgAggregate;

    @Field(() => VerificationCodeSumAggregate, {nullable:true})
    _sum?: VerificationCodeSumAggregate;

    @Field(() => VerificationCodeMinAggregate, {nullable:true})
    _min?: VerificationCodeMinAggregate;

    @Field(() => VerificationCodeMaxAggregate, {nullable:true})
    _max?: VerificationCodeMaxAggregate;
}
