import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusUpdateWithoutHistory_as_previousInput } from './subsidy-status-update-without-history-as-previous.input';
import { Type } from 'class-transformer';
import { SubsidyStatusCreateWithoutHistory_as_previousInput } from './subsidy-status-create-without-history-as-previous.input';
import { SubsidyStatusWhereInput } from './subsidy-status-where.input';

@InputType()
export class SubsidyStatusUpsertWithoutHistory_as_previousInput {

    @Field(() => SubsidyStatusUpdateWithoutHistory_as_previousInput, {nullable:false})
    @Type(() => SubsidyStatusUpdateWithoutHistory_as_previousInput)
    update!: SubsidyStatusUpdateWithoutHistory_as_previousInput;

    @Field(() => SubsidyStatusCreateWithoutHistory_as_previousInput, {nullable:false})
    @Type(() => SubsidyStatusCreateWithoutHistory_as_previousInput)
    create!: SubsidyStatusCreateWithoutHistory_as_previousInput;

    @Field(() => SubsidyStatusWhereInput, {nullable:true})
    @Type(() => SubsidyStatusWhereInput)
    where?: SubsidyStatusWhereInput;
}
