import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusWhereInput } from './subsidy-status-where.input';
import { Type } from 'class-transformer';
import { SubsidyStatusUpdateWithoutHistory_as_previousInput } from './subsidy-status-update-without-history-as-previous.input';

@InputType()
export class SubsidyStatusUpdateToOneWithWhereWithoutHistory_as_previousInput {

    @Field(() => SubsidyStatusWhereInput, {nullable:true})
    @Type(() => SubsidyStatusWhereInput)
    where?: SubsidyStatusWhereInput;

    @Field(() => SubsidyStatusUpdateWithoutHistory_as_previousInput, {nullable:false})
    @Type(() => SubsidyStatusUpdateWithoutHistory_as_previousInput)
    data!: SubsidyStatusUpdateWithoutHistory_as_previousInput;
}
