import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VoluntariesOnProjectsWhereInput } from './voluntaries-on-projects-where.input';
import { Type } from 'class-transformer';
import { VoluntariesOnProjectsOrderByWithRelationInput } from './voluntaries-on-projects-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { VoluntariesOnProjectsWhereUniqueInput } from './voluntaries-on-projects-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VoluntariesOnProjectsCountAggregateInput } from './voluntaries-on-projects-count-aggregate.input';
import { VoluntariesOnProjectsMinAggregateInput } from './voluntaries-on-projects-min-aggregate.input';
import { VoluntariesOnProjectsMaxAggregateInput } from './voluntaries-on-projects-max-aggregate.input';

@ArgsType()
export class VoluntariesOnProjectsAggregateArgs {

    @Field(() => VoluntariesOnProjectsWhereInput, {nullable:true})
    @Type(() => VoluntariesOnProjectsWhereInput)
    where?: VoluntariesOnProjectsWhereInput;

    @Field(() => [VoluntariesOnProjectsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VoluntariesOnProjectsOrderByWithRelationInput>;

    @Field(() => VoluntariesOnProjectsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<VoluntariesOnProjectsWhereUniqueInput, 'user_id_project_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => VoluntariesOnProjectsCountAggregateInput, {nullable:true})
    _count?: VoluntariesOnProjectsCountAggregateInput;

    @Field(() => VoluntariesOnProjectsMinAggregateInput, {nullable:true})
    _min?: VoluntariesOnProjectsMinAggregateInput;

    @Field(() => VoluntariesOnProjectsMaxAggregateInput, {nullable:true})
    _max?: VoluntariesOnProjectsMaxAggregateInput;
}
