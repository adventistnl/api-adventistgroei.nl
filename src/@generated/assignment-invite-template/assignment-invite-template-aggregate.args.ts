import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssignmentInviteTemplateWhereInput } from './assignment-invite-template-where.input';
import { Type } from 'class-transformer';
import { AssignmentInviteTemplateOrderByWithRelationInput } from './assignment-invite-template-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AssignmentInviteTemplateWhereUniqueInput } from './assignment-invite-template-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AssignmentInviteTemplateCountAggregateInput } from './assignment-invite-template-count-aggregate.input';
import { AssignmentInviteTemplateMinAggregateInput } from './assignment-invite-template-min-aggregate.input';
import { AssignmentInviteTemplateMaxAggregateInput } from './assignment-invite-template-max-aggregate.input';

@ArgsType()
export class AssignmentInviteTemplateAggregateArgs {

    @Field(() => AssignmentInviteTemplateWhereInput, {nullable:true})
    @Type(() => AssignmentInviteTemplateWhereInput)
    where?: AssignmentInviteTemplateWhereInput;

    @Field(() => [AssignmentInviteTemplateOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AssignmentInviteTemplateOrderByWithRelationInput>;

    @Field(() => AssignmentInviteTemplateWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AssignmentInviteTemplateWhereUniqueInput, 'id'>;

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
