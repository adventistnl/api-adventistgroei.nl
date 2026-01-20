import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { VerificationCodeCountAggregate } from './verification-code-count-aggregate.output';
import { VerificationCodeAvgAggregate } from './verification-code-avg-aggregate.output';
import { VerificationCodeSumAggregate } from './verification-code-sum-aggregate.output';
import { VerificationCodeMinAggregate } from './verification-code-min-aggregate.output';
import { VerificationCodeMaxAggregate } from './verification-code-max-aggregate.output';

@ObjectType()
export class AggregateVerificationCode {

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
