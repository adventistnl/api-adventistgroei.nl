import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { VoluntariesOnProjectsCountAggregate } from './voluntaries-on-projects-count-aggregate.output';
import { VoluntariesOnProjectsMinAggregate } from './voluntaries-on-projects-min-aggregate.output';
import { VoluntariesOnProjectsMaxAggregate } from './voluntaries-on-projects-max-aggregate.output';

@ObjectType()
export class VoluntariesOnProjectsGroupBy {

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => String, {nullable:false})
    project_id!: string;

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

    @Field(() => VoluntariesOnProjectsCountAggregate, {nullable:true})
    _count?: VoluntariesOnProjectsCountAggregate;

    @Field(() => VoluntariesOnProjectsMinAggregate, {nullable:true})
    _min?: VoluntariesOnProjectsMinAggregate;

    @Field(() => VoluntariesOnProjectsMaxAggregate, {nullable:true})
    _max?: VoluntariesOnProjectsMaxAggregate;
}
