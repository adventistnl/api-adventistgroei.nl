import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssignmentInviteTemplateWhereInput } from './assignment-invite-template-where.input';
import { Type } from 'class-transformer';
import { AssignmentInviteTemplateOrderByWithAggregationInput } from './assignment-invite-template-order-by-with-aggregation.input';
import { AssignmentInviteTemplateScalarFieldEnum } from './assignment-invite-template-scalar-field.enum';
import { AssignmentInviteTemplateScalarWhereWithAggregatesInput } from './assignment-invite-template-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AssignmentInviteTemplateCountAggregateInput } from './assignment-invite-template-count-aggregate.input';
import { AssignmentInviteTemplateMinAggregateInput } from './assignment-invite-template-min-aggregate.input';
import { AssignmentInviteTemplateMaxAggregateInput } from './assignment-invite-template-max-aggregate.input';

@ArgsType()
export class AssignmentInviteTemplateGroupByArgs {

    @Field(() => AssignmentInviteTemplateWhereInput, {nullable:true})
    @Type(() => AssignmentInviteTemplateWhereInput)
    where?: AssignmentInviteTemplateWhereInput;

    @Field(() => [AssignmentInviteTemplateOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AssignmentInviteTemplateOrderByWithAggregationInput>;

    @Field(() => [AssignmentInviteTemplateScalarFieldEnum], {nullable:false})
    by!: Array<`${AssignmentInviteTemplateScalarFieldEnum}`>;

    @Field(() => AssignmentInviteTemplateScalarWhereWithAggregatesInput, {nullable:true})
    having?: AssignmentInviteTemplateScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AssignmentInviteTemplateCountAggregateInput, {nullable:true})
    _count?: AssignmentInviteTemplateCountAggregateInput;

    @Field(() => AssignmentInviteTemplateMinAggregateInput, {nullable:true})
    _min?: AssignmentInviteTemplateMinAggregateInput;

    @Field(() => AssignmentInviteTemplateMaxAggregateInput, {nullable:true})
    _max?: AssignmentInviteTemplateMaxAggregateInput;
}
