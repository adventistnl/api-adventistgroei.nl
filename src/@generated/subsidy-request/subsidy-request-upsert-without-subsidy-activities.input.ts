import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestUpdateWithoutSubsidy_activitiesInput } from './subsidy-request-update-without-subsidy-activities.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateWithoutSubsidy_activitiesInput } from './subsidy-request-create-without-subsidy-activities.input';
import { SubsidyRequestWhereInput } from './subsidy-request-where.input';

@InputType()
export class SubsidyRequestUpsertWithoutSubsidy_activitiesInput {

    @Field(() => SubsidyRequestUpdateWithoutSubsidy_activitiesInput, {nullable:false})
    @Type(() => SubsidyRequestUpdateWithoutSubsidy_activitiesInput)
    update!: SubsidyRequestUpdateWithoutSubsidy_activitiesInput;

    @Field(() => SubsidyRequestCreateWithoutSubsidy_activitiesInput, {nullable:false})
    @Type(() => SubsidyRequestCreateWithoutSubsidy_activitiesInput)
    create!: SubsidyRequestCreateWithoutSubsidy_activitiesInput;

    @Field(() => SubsidyRequestWhereInput, {nullable:true})
    @Type(() => SubsidyRequestWhereInput)
    where?: SubsidyRequestWhereInput;
}
