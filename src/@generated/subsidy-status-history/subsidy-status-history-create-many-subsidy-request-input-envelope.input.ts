import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusHistoryCreateManySubsidy_requestInput } from './subsidy-status-history-create-many-subsidy-request.input';
import { Type } from 'class-transformer';

@InputType()
export class SubsidyStatusHistoryCreateManySubsidy_requestInputEnvelope {

    @Field(() => [SubsidyStatusHistoryCreateManySubsidy_requestInput], {nullable:false})
    @Type(() => SubsidyStatusHistoryCreateManySubsidy_requestInput)
    data!: Array<SubsidyStatusHistoryCreateManySubsidy_requestInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
