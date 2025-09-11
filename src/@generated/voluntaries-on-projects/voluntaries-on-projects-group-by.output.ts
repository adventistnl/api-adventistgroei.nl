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

    @Field(() => VoluntariesOnProjectsCountAggregate, {nullable:true})
    _count?: VoluntariesOnProjectsCountAggregate;

    @Field(() => VoluntariesOnProjectsMinAggregate, {nullable:true})
    _min?: VoluntariesOnProjectsMinAggregate;

    @Field(() => VoluntariesOnProjectsMaxAggregate, {nullable:true})
    _max?: VoluntariesOnProjectsMaxAggregate;
}
