import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyRequestItemWhereUniqueInput } from './subsidy-request-item-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyRequestItemCreateWithoutProject_activityInput } from './subsidy-request-item-create-without-project-activity.input';

@InputType()
export class SubsidyRequestItemCreateOrConnectWithoutProject_activityInput {

    @Field(() => SubsidyRequestItemWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyRequestItemWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyRequestItemWhereUniqueInput, 'id'>;

    @Field(() => SubsidyRequestItemCreateWithoutProject_activityInput, {nullable:false})
    @Type(() => SubsidyRequestItemCreateWithoutProject_activityInput)
    create!: SubsidyRequestItemCreateWithoutProject_activityInput;
}
