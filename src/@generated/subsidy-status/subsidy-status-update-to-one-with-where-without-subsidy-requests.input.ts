import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusWhereInput } from './subsidy-status-where.input';
import { Type } from 'class-transformer';
import { SubsidyStatusUpdateWithoutSubsidy_requestsInput } from './subsidy-status-update-without-subsidy-requests.input';

@InputType()
export class SubsidyStatusUpdateToOneWithWhereWithoutSubsidy_requestsInput {

    @Field(() => SubsidyStatusWhereInput, {nullable:true})
    @Type(() => SubsidyStatusWhereInput)
    where?: SubsidyStatusWhereInput;

    @Field(() => SubsidyStatusUpdateWithoutSubsidy_requestsInput, {nullable:false})
    @Type(() => SubsidyStatusUpdateWithoutSubsidy_requestsInput)
    data!: SubsidyStatusUpdateWithoutSubsidy_requestsInput;
}
