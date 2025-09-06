import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { LanguagePreference } from '../prisma/language-preference.enum';
import { MissionProjectCountAggregate } from './mission-project-count-aggregate.output';
import { MissionProjectAvgAggregate } from './mission-project-avg-aggregate.output';
import { MissionProjectSumAggregate } from './mission-project-sum-aggregate.output';
import { MissionProjectMinAggregate } from './mission-project-min-aggregate.output';
import { MissionProjectMaxAggregate } from './mission-project-max-aggregate.output';

@ObjectType()
export class MissionProjectGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    department_id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    budget!: Decimal;

    @Field(() => String, {nullable:false})
    media_link!: string;

    @Field(() => LanguagePreference, {nullable:false})
    language_preference!: `${LanguagePreference}`;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {nullable:false})
    is_deleted!: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => String, {nullable:true})
    institution_id?: string;

    @Field(() => MissionProjectCountAggregate, {nullable:true})
    _count?: MissionProjectCountAggregate;

    @Field(() => MissionProjectAvgAggregate, {nullable:true})
    _avg?: MissionProjectAvgAggregate;

    @Field(() => MissionProjectSumAggregate, {nullable:true})
    _sum?: MissionProjectSumAggregate;

    @Field(() => MissionProjectMinAggregate, {nullable:true})
    _min?: MissionProjectMinAggregate;

    @Field(() => MissionProjectMaxAggregate, {nullable:true})
    _max?: MissionProjectMaxAggregate;
}
