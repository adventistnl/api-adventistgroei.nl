import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityDocumentsCreateWithoutProject_activityInput } from './activity-documents-create-without-project-activity.input';
import { Type } from 'class-transformer';
import { ActivityDocumentsCreateOrConnectWithoutProject_activityInput } from './activity-documents-create-or-connect-without-project-activity.input';
import { ActivityDocumentsUpsertWithWhereUniqueWithoutProject_activityInput } from './activity-documents-upsert-with-where-unique-without-project-activity.input';
import { ActivityDocumentsCreateManyProject_activityInputEnvelope } from './activity-documents-create-many-project-activity-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ActivityDocumentsWhereUniqueInput } from './activity-documents-where-unique.input';
import { ActivityDocumentsUpdateWithWhereUniqueWithoutProject_activityInput } from './activity-documents-update-with-where-unique-without-project-activity.input';
import { ActivityDocumentsUpdateManyWithWhereWithoutProject_activityInput } from './activity-documents-update-many-with-where-without-project-activity.input';
import { ActivityDocumentsScalarWhereInput } from './activity-documents-scalar-where.input';

@InputType()
export class ActivityDocumentsUncheckedUpdateManyWithoutProject_activityNestedInput {

    @Field(() => [ActivityDocumentsCreateWithoutProject_activityInput], {nullable:true})
    @Type(() => ActivityDocumentsCreateWithoutProject_activityInput)
    create?: Array<ActivityDocumentsCreateWithoutProject_activityInput>;

    @Field(() => [ActivityDocumentsCreateOrConnectWithoutProject_activityInput], {nullable:true})
    @Type(() => ActivityDocumentsCreateOrConnectWithoutProject_activityInput)
    connectOrCreate?: Array<ActivityDocumentsCreateOrConnectWithoutProject_activityInput>;

    @Field(() => [ActivityDocumentsUpsertWithWhereUniqueWithoutProject_activityInput], {nullable:true})
    @Type(() => ActivityDocumentsUpsertWithWhereUniqueWithoutProject_activityInput)
    upsert?: Array<ActivityDocumentsUpsertWithWhereUniqueWithoutProject_activityInput>;

    @Field(() => ActivityDocumentsCreateManyProject_activityInputEnvelope, {nullable:true})
    @Type(() => ActivityDocumentsCreateManyProject_activityInputEnvelope)
    createMany?: ActivityDocumentsCreateManyProject_activityInputEnvelope;

    @Field(() => [ActivityDocumentsWhereUniqueInput], {nullable:true})
    @Type(() => ActivityDocumentsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ActivityDocumentsWhereUniqueInput, 'id'>>;

    @Field(() => [ActivityDocumentsWhereUniqueInput], {nullable:true})
    @Type(() => ActivityDocumentsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ActivityDocumentsWhereUniqueInput, 'id'>>;

    @Field(() => [ActivityDocumentsWhereUniqueInput], {nullable:true})
    @Type(() => ActivityDocumentsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ActivityDocumentsWhereUniqueInput, 'id'>>;

    @Field(() => [ActivityDocumentsWhereUniqueInput], {nullable:true})
    @Type(() => ActivityDocumentsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ActivityDocumentsWhereUniqueInput, 'id'>>;

    @Field(() => [ActivityDocumentsUpdateWithWhereUniqueWithoutProject_activityInput], {nullable:true})
    @Type(() => ActivityDocumentsUpdateWithWhereUniqueWithoutProject_activityInput)
    update?: Array<ActivityDocumentsUpdateWithWhereUniqueWithoutProject_activityInput>;

    @Field(() => [ActivityDocumentsUpdateManyWithWhereWithoutProject_activityInput], {nullable:true})
    @Type(() => ActivityDocumentsUpdateManyWithWhereWithoutProject_activityInput)
    updateMany?: Array<ActivityDocumentsUpdateManyWithWhereWithoutProject_activityInput>;

    @Field(() => [ActivityDocumentsScalarWhereInput], {nullable:true})
    @Type(() => ActivityDocumentsScalarWhereInput)
    deleteMany?: Array<ActivityDocumentsScalarWhereInput>;
}
