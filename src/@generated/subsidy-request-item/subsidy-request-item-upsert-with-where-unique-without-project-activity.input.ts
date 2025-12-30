import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyRequestItemWhereUniqueInput } from './subsidy-request-item-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyRequestItemUpdateWithoutProject_activityInput } from './subsidy-request-item-update-without-project-activity.input';
import { SubsidyRequestItemCreateWithoutProject_activityInput } from './subsidy-request-item-create-without-project-activity.input';

@InputType()
export class SubsidyRequestItemUpsertWithWhereUniqueWithoutProject_activityInput {

    @Field(() => SubsidyRequestItemWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyRequestItemWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyRequestItemWhereUniqueInput, 'id'>;

    @Field(() => SubsidyRequestItemUpdateWithoutProject_activityInput, {nullable:false})
    @Type(() => SubsidyRequestItemUpdateWithoutProject_activityInput)
    update!: SubsidyRequestItemUpdateWithoutProject_activityInput;

    @Field(() => SubsidyRequestItemCreateWithoutProject_activityInput, {nullable:false})
    @Type(() => SubsidyRequestItemCreateWithoutProject_activityInput)
    create!: SubsidyRequestItemCreateWithoutProject_activityInput;
}
