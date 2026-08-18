import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssignmentInviteTemplateWhereInput } from './assignment-invite-template-where.input';
import { Type } from 'class-transformer';
import { AssignmentInviteTemplateOrderByWithRelationInput } from './assignment-invite-template-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AssignmentInviteTemplateWhereUniqueInput } from './assignment-invite-template-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AssignmentInviteTemplateScalarFieldEnum } from './assignment-invite-template-scalar-field.enum';

@ArgsType()
export class FindManyAssignmentInviteTemplateArgs {

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

    @Field(() => [AssignmentInviteTemplateScalarFieldEnum], {nullable:true})
    distinct?: Array<`${AssignmentInviteTemplateScalarFieldEnum}`>;
}
