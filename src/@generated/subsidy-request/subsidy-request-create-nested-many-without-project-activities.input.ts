import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestCreateWithoutProject_activitiesInput } from './subsidy-request-create-without-project-activities.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateOrConnectWithoutProject_activitiesInput } from './subsidy-request-create-or-connect-without-project-activities.input';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';

@InputType()
export class SubsidyRequestCreateNestedManyWithoutProject_activitiesInput {

    @Field(() => [SubsidyRequestCreateWithoutProject_activitiesInput], {nullable:true})
    @Type(() => SubsidyRequestCreateWithoutProject_activitiesInput)
    create?: Array<SubsidyRequestCreateWithoutProject_activitiesInput>;

    @Field(() => [SubsidyRequestCreateOrConnectWithoutProject_activitiesInput], {nullable:true})
    @Type(() => SubsidyRequestCreateOrConnectWithoutProject_activitiesInput)
    connectOrCreate?: Array<SubsidyRequestCreateOrConnectWithoutProject_activitiesInput>;

    @Field(() => [SubsidyRequestWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>>;
}
