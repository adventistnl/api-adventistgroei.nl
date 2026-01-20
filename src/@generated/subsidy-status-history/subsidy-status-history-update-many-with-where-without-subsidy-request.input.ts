import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusHistoryScalarWhereInput } from './subsidy-status-history-scalar-where.input';
import { Type } from 'class-transformer';
import { SubsidyStatusHistoryUpdateManyMutationInput } from './subsidy-status-history-update-many-mutation.input';

@InputType()
export class SubsidyStatusHistoryUpdateManyWithWhereWithoutSubsidy_requestInput {

    @Field(() => SubsidyStatusHistoryScalarWhereInput, {nullable:false})
    @Type(() => SubsidyStatusHistoryScalarWhereInput)
    where!: SubsidyStatusHistoryScalarWhereInput;

    @Field(() => SubsidyStatusHistoryUpdateManyMutationInput, {nullable:false})
    @Type(() => SubsidyStatusHistoryUpdateManyMutationInput)
    data!: SubsidyStatusHistoryUpdateManyMutationInput;
}
