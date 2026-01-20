import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ActivityDocumentsWhereUniqueInput } from './activity-documents-where-unique.input';
import { Type } from 'class-transformer';
import { ActivityDocumentsUpdateWithoutProject_activityInput } from './activity-documents-update-without-project-activity.input';

@InputType()
export class ActivityDocumentsUpdateWithWhereUniqueWithoutProject_activityInput {

    @Field(() => ActivityDocumentsWhereUniqueInput, {nullable:false})
    @Type(() => ActivityDocumentsWhereUniqueInput)
    where!: Prisma.AtLeast<ActivityDocumentsWhereUniqueInput, 'id'>;

    @Field(() => ActivityDocumentsUpdateWithoutProject_activityInput, {nullable:false})
    @Type(() => ActivityDocumentsUpdateWithoutProject_activityInput)
    data!: ActivityDocumentsUpdateWithoutProject_activityInput;
}
