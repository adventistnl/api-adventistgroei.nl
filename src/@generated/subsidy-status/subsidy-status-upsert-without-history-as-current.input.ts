import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusUpdateWithoutHistory_as_currentInput } from './subsidy-status-update-without-history-as-current.input';
import { Type } from 'class-transformer';
import { SubsidyStatusCreateWithoutHistory_as_currentInput } from './subsidy-status-create-without-history-as-current.input';
import { SubsidyStatusWhereInput } from './subsidy-status-where.input';

@InputType()
export class SubsidyStatusUpsertWithoutHistory_as_currentInput {

    @Field(() => SubsidyStatusUpdateWithoutHistory_as_currentInput, {nullable:false})
    @Type(() => SubsidyStatusUpdateWithoutHistory_as_currentInput)
    update!: SubsidyStatusUpdateWithoutHistory_as_currentInput;

    @Field(() => SubsidyStatusCreateWithoutHistory_as_currentInput, {nullable:false})
    @Type(() => SubsidyStatusCreateWithoutHistory_as_currentInput)
    create!: SubsidyStatusCreateWithoutHistory_as_currentInput;

    @Field(() => SubsidyStatusWhereInput, {nullable:true})
    @Type(() => SubsidyStatusWhereInput)
    where?: SubsidyStatusWhereInput;
}
