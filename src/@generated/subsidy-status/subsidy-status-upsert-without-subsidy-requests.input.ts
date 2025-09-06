import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusUpdateWithoutSubsidy_requestsInput } from './subsidy-status-update-without-subsidy-requests.input';
import { Type } from 'class-transformer';
import { SubsidyStatusCreateWithoutSubsidy_requestsInput } from './subsidy-status-create-without-subsidy-requests.input';
import { SubsidyStatusWhereInput } from './subsidy-status-where.input';

@InputType()
export class SubsidyStatusUpsertWithoutSubsidy_requestsInput {

    @Field(() => SubsidyStatusUpdateWithoutSubsidy_requestsInput, {nullable:false})
    @Type(() => SubsidyStatusUpdateWithoutSubsidy_requestsInput)
    update!: SubsidyStatusUpdateWithoutSubsidy_requestsInput;

    @Field(() => SubsidyStatusCreateWithoutSubsidy_requestsInput, {nullable:false})
    @Type(() => SubsidyStatusCreateWithoutSubsidy_requestsInput)
    create!: SubsidyStatusCreateWithoutSubsidy_requestsInput;

    @Field(() => SubsidyStatusWhereInput, {nullable:true})
    @Type(() => SubsidyStatusWhereInput)
    where?: SubsidyStatusWhereInput;
}
