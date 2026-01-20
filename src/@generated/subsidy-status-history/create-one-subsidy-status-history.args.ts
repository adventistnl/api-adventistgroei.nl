import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyStatusHistoryCreateInput } from './subsidy-status-history-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSubsidyStatusHistoryArgs {

    @Field(() => SubsidyStatusHistoryCreateInput, {nullable:false})
    @Type(() => SubsidyStatusHistoryCreateInput)
    data!: SubsidyStatusHistoryCreateInput;
}
