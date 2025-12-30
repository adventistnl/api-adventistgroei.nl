import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestItemCreateWithoutProject_activityInput } from './subsidy-request-item-create-without-project-activity.input';
import { Type } from 'class-transformer';
import { SubsidyRequestItemCreateOrConnectWithoutProject_activityInput } from './subsidy-request-item-create-or-connect-without-project-activity.input';
import { SubsidyRequestItemCreateManyProject_activityInputEnvelope } from './subsidy-request-item-create-many-project-activity-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyRequestItemWhereUniqueInput } from './subsidy-request-item-where-unique.input';

@InputType()
export class SubsidyRequestItemCreateNestedManyWithoutProject_activityInput {

    @Field(() => [SubsidyRequestItemCreateWithoutProject_activityInput], {nullable:true})
    @Type(() => SubsidyRequestItemCreateWithoutProject_activityInput)
    create?: Array<SubsidyRequestItemCreateWithoutProject_activityInput>;

    @Field(() => [SubsidyRequestItemCreateOrConnectWithoutProject_activityInput], {nullable:true})
    @Type(() => SubsidyRequestItemCreateOrConnectWithoutProject_activityInput)
    connectOrCreate?: Array<SubsidyRequestItemCreateOrConnectWithoutProject_activityInput>;

    @Field(() => SubsidyRequestItemCreateManyProject_activityInputEnvelope, {nullable:true})
    @Type(() => SubsidyRequestItemCreateManyProject_activityInputEnvelope)
    createMany?: SubsidyRequestItemCreateManyProject_activityInputEnvelope;

    @Field(() => [SubsidyRequestItemWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyRequestItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubsidyRequestItemWhereUniqueInput, 'id'>>;
}
