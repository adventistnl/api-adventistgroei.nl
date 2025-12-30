import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyRequestItemWhereUniqueInput } from './subsidy-request-item-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyRequestItemUpdateWithoutProject_activityInput } from './subsidy-request-item-update-without-project-activity.input';

@InputType()
export class SubsidyRequestItemUpdateWithWhereUniqueWithoutProject_activityInput {

    @Field(() => SubsidyRequestItemWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyRequestItemWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyRequestItemWhereUniqueInput, 'id'>;

    @Field(() => SubsidyRequestItemUpdateWithoutProject_activityInput, {nullable:false})
    @Type(() => SubsidyRequestItemUpdateWithoutProject_activityInput)
    data!: SubsidyRequestItemUpdateWithoutProject_activityInput;
}
