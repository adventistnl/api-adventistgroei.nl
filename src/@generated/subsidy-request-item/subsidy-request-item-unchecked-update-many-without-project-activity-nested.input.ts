import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestItemCreateWithoutProject_activityInput } from './subsidy-request-item-create-without-project-activity.input';
import { Type } from 'class-transformer';
import { SubsidyRequestItemCreateOrConnectWithoutProject_activityInput } from './subsidy-request-item-create-or-connect-without-project-activity.input';
import { SubsidyRequestItemUpsertWithWhereUniqueWithoutProject_activityInput } from './subsidy-request-item-upsert-with-where-unique-without-project-activity.input';
import { SubsidyRequestItemCreateManyProject_activityInputEnvelope } from './subsidy-request-item-create-many-project-activity-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyRequestItemWhereUniqueInput } from './subsidy-request-item-where-unique.input';
import { SubsidyRequestItemUpdateWithWhereUniqueWithoutProject_activityInput } from './subsidy-request-item-update-with-where-unique-without-project-activity.input';
import { SubsidyRequestItemUpdateManyWithWhereWithoutProject_activityInput } from './subsidy-request-item-update-many-with-where-without-project-activity.input';
import { SubsidyRequestItemScalarWhereInput } from './subsidy-request-item-scalar-where.input';

@InputType()
export class SubsidyRequestItemUncheckedUpdateManyWithoutProject_activityNestedInput {

    @Field(() => [SubsidyRequestItemCreateWithoutProject_activityInput], {nullable:true})
    @Type(() => SubsidyRequestItemCreateWithoutProject_activityInput)
    create?: Array<SubsidyRequestItemCreateWithoutProject_activityInput>;

    @Field(() => [SubsidyRequestItemCreateOrConnectWithoutProject_activityInput], {nullable:true})
    @Type(() => SubsidyRequestItemCreateOrConnectWithoutProject_activityInput)
    connectOrCreate?: Array<SubsidyRequestItemCreateOrConnectWithoutProject_activityInput>;

    @Field(() => [SubsidyRequestItemUpsertWithWhereUniqueWithoutProject_activityInput], {nullable:true})
    @Type(() => SubsidyRequestItemUpsertWithWhereUniqueWithoutProject_activityInput)
    upsert?: Array<SubsidyRequestItemUpsertWithWhereUniqueWithoutProject_activityInput>;

    @Field(() => SubsidyRequestItemCreateManyProject_activityInputEnvelope, {nullable:true})
    @Type(() => SubsidyRequestItemCreateManyProject_activityInputEnvelope)
    createMany?: SubsidyRequestItemCreateManyProject_activityInputEnvelope;

    @Field(() => [SubsidyRequestItemWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyRequestItemWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SubsidyRequestItemWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyRequestItemWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyRequestItemWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SubsidyRequestItemWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyRequestItemWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyRequestItemWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SubsidyRequestItemWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyRequestItemWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyRequestItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubsidyRequestItemWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyRequestItemUpdateWithWhereUniqueWithoutProject_activityInput], {nullable:true})
    @Type(() => SubsidyRequestItemUpdateWithWhereUniqueWithoutProject_activityInput)
    update?: Array<SubsidyRequestItemUpdateWithWhereUniqueWithoutProject_activityInput>;

    @Field(() => [SubsidyRequestItemUpdateManyWithWhereWithoutProject_activityInput], {nullable:true})
    @Type(() => SubsidyRequestItemUpdateManyWithWhereWithoutProject_activityInput)
    updateMany?: Array<SubsidyRequestItemUpdateManyWithWhereWithoutProject_activityInput>;

    @Field(() => [SubsidyRequestItemScalarWhereInput], {nullable:true})
    @Type(() => SubsidyRequestItemScalarWhereInput)
    deleteMany?: Array<SubsidyRequestItemScalarWhereInput>;
}
