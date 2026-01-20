import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityDocumentsCreateWithoutProject_activityInput } from './activity-documents-create-without-project-activity.input';
import { Type } from 'class-transformer';
import { ActivityDocumentsCreateOrConnectWithoutProject_activityInput } from './activity-documents-create-or-connect-without-project-activity.input';
import { ActivityDocumentsCreateManyProject_activityInputEnvelope } from './activity-documents-create-many-project-activity-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ActivityDocumentsWhereUniqueInput } from './activity-documents-where-unique.input';

@InputType()
export class ActivityDocumentsUncheckedCreateNestedManyWithoutProject_activityInput {

    @Field(() => [ActivityDocumentsCreateWithoutProject_activityInput], {nullable:true})
    @Type(() => ActivityDocumentsCreateWithoutProject_activityInput)
    create?: Array<ActivityDocumentsCreateWithoutProject_activityInput>;

    @Field(() => [ActivityDocumentsCreateOrConnectWithoutProject_activityInput], {nullable:true})
    @Type(() => ActivityDocumentsCreateOrConnectWithoutProject_activityInput)
    connectOrCreate?: Array<ActivityDocumentsCreateOrConnectWithoutProject_activityInput>;

    @Field(() => ActivityDocumentsCreateManyProject_activityInputEnvelope, {nullable:true})
    @Type(() => ActivityDocumentsCreateManyProject_activityInputEnvelope)
    createMany?: ActivityDocumentsCreateManyProject_activityInputEnvelope;

    @Field(() => [ActivityDocumentsWhereUniqueInput], {nullable:true})
    @Type(() => ActivityDocumentsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ActivityDocumentsWhereUniqueInput, 'id'>>;
}
