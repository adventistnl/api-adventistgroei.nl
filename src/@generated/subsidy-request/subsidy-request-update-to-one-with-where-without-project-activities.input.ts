import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestWhereInput } from './subsidy-request-where.input';
import { Type } from 'class-transformer';
import { SubsidyRequestUpdateWithoutProject_activitiesInput } from './subsidy-request-update-without-project-activities.input';

@InputType()
export class SubsidyRequestUpdateToOneWithWhereWithoutProject_activitiesInput {

    @Field(() => SubsidyRequestWhereInput, {nullable:true})
    @Type(() => SubsidyRequestWhereInput)
    where?: SubsidyRequestWhereInput;

    @Field(() => SubsidyRequestUpdateWithoutProject_activitiesInput, {nullable:false})
    @Type(() => SubsidyRequestUpdateWithoutProject_activitiesInput)
    data!: SubsidyRequestUpdateWithoutProject_activitiesInput;
}
