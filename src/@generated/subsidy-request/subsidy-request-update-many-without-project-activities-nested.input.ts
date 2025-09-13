import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestCreateWithoutProject_activitiesInput } from './subsidy-request-create-without-project-activities.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateOrConnectWithoutProject_activitiesInput } from './subsidy-request-create-or-connect-without-project-activities.input';
import { SubsidyRequestUpsertWithWhereUniqueWithoutProject_activitiesInput } from './subsidy-request-upsert-with-where-unique-without-project-activities.input';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';
import { SubsidyRequestUpdateWithWhereUniqueWithoutProject_activitiesInput } from './subsidy-request-update-with-where-unique-without-project-activities.input';
import { SubsidyRequestUpdateManyWithWhereWithoutProject_activitiesInput } from './subsidy-request-update-many-with-where-without-project-activities.input';
import { SubsidyRequestScalarWhereInput } from './subsidy-request-scalar-where.input';

@InputType()
export class SubsidyRequestUpdateManyWithoutProject_activitiesNestedInput {

    @Field(() => [SubsidyRequestCreateWithoutProject_activitiesInput], {nullable:true})
    @Type(() => SubsidyRequestCreateWithoutProject_activitiesInput)
    create?: Array<SubsidyRequestCreateWithoutProject_activitiesInput>;

    @Field(() => [SubsidyRequestCreateOrConnectWithoutProject_activitiesInput], {nullable:true})
    @Type(() => SubsidyRequestCreateOrConnectWithoutProject_activitiesInput)
    connectOrCreate?: Array<SubsidyRequestCreateOrConnectWithoutProject_activitiesInput>;

    @Field(() => [SubsidyRequestUpsertWithWhereUniqueWithoutProject_activitiesInput], {nullable:true})
    @Type(() => SubsidyRequestUpsertWithWhereUniqueWithoutProject_activitiesInput)
    upsert?: Array<SubsidyRequestUpsertWithWhereUniqueWithoutProject_activitiesInput>;

    @Field(() => [SubsidyRequestWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyRequestWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyRequestWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyRequestWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyRequestWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyRequestWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyRequestWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyRequestUpdateWithWhereUniqueWithoutProject_activitiesInput], {nullable:true})
    @Type(() => SubsidyRequestUpdateWithWhereUniqueWithoutProject_activitiesInput)
    update?: Array<SubsidyRequestUpdateWithWhereUniqueWithoutProject_activitiesInput>;

    @Field(() => [SubsidyRequestUpdateManyWithWhereWithoutProject_activitiesInput], {nullable:true})
    @Type(() => SubsidyRequestUpdateManyWithWhereWithoutProject_activitiesInput)
    updateMany?: Array<SubsidyRequestUpdateManyWithWhereWithoutProject_activitiesInput>;

    @Field(() => [SubsidyRequestScalarWhereInput], {nullable:true})
    @Type(() => SubsidyRequestScalarWhereInput)
    deleteMany?: Array<SubsidyRequestScalarWhereInput>;
}
