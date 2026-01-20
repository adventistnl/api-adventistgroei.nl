import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ActivityDocumentsWhereUniqueInput } from './activity-documents-where-unique.input';
import { Type } from 'class-transformer';
import { ActivityDocumentsUpdateWithoutProject_activityInput } from './activity-documents-update-without-project-activity.input';
import { ActivityDocumentsCreateWithoutProject_activityInput } from './activity-documents-create-without-project-activity.input';

@InputType()
export class ActivityDocumentsUpsertWithWhereUniqueWithoutProject_activityInput {

    @Field(() => ActivityDocumentsWhereUniqueInput, {nullable:false})
    @Type(() => ActivityDocumentsWhereUniqueInput)
    where!: Prisma.AtLeast<ActivityDocumentsWhereUniqueInput, 'id'>;

    @Field(() => ActivityDocumentsUpdateWithoutProject_activityInput, {nullable:false})
    @Type(() => ActivityDocumentsUpdateWithoutProject_activityInput)
    update!: ActivityDocumentsUpdateWithoutProject_activityInput;

    @Field(() => ActivityDocumentsCreateWithoutProject_activityInput, {nullable:false})
    @Type(() => ActivityDocumentsCreateWithoutProject_activityInput)
    create!: ActivityDocumentsCreateWithoutProject_activityInput;
}
