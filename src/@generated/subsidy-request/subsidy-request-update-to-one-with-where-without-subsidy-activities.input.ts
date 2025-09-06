import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestWhereInput } from './subsidy-request-where.input';
import { Type } from 'class-transformer';
import { SubsidyRequestUpdateWithoutSubsidy_activitiesInput } from './subsidy-request-update-without-subsidy-activities.input';

@InputType()
export class SubsidyRequestUpdateToOneWithWhereWithoutSubsidy_activitiesInput {

    @Field(() => SubsidyRequestWhereInput, {nullable:true})
    @Type(() => SubsidyRequestWhereInput)
    where?: SubsidyRequestWhereInput;

    @Field(() => SubsidyRequestUpdateWithoutSubsidy_activitiesInput, {nullable:false})
    @Type(() => SubsidyRequestUpdateWithoutSubsidy_activitiesInput)
    data!: SubsidyRequestUpdateWithoutSubsidy_activitiesInput;
}
