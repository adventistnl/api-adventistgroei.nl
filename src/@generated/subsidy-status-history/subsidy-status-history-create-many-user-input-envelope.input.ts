import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusHistoryCreateManyUserInput } from './subsidy-status-history-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class SubsidyStatusHistoryCreateManyUserInputEnvelope {

    @Field(() => [SubsidyStatusHistoryCreateManyUserInput], {nullable:false})
    @Type(() => SubsidyStatusHistoryCreateManyUserInput)
    data!: Array<SubsidyStatusHistoryCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
