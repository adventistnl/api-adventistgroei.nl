import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusWhereInput } from './subsidy-status-where.input';
import { Type } from 'class-transformer';
import { SubsidyStatusUpdateWithoutHistory_as_currentInput } from './subsidy-status-update-without-history-as-current.input';

@InputType()
export class SubsidyStatusUpdateToOneWithWhereWithoutHistory_as_currentInput {

    @Field(() => SubsidyStatusWhereInput, {nullable:true})
    @Type(() => SubsidyStatusWhereInput)
    where?: SubsidyStatusWhereInput;

    @Field(() => SubsidyStatusUpdateWithoutHistory_as_currentInput, {nullable:false})
    @Type(() => SubsidyStatusUpdateWithoutHistory_as_currentInput)
    data!: SubsidyStatusUpdateWithoutHistory_as_currentInput;
}
