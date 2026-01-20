import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusHistoryCreateManyPrevious_statusInput } from './subsidy-status-history-create-many-previous-status.input';
import { Type } from 'class-transformer';

@InputType()
export class SubsidyStatusHistoryCreateManyPrevious_statusInputEnvelope {

    @Field(() => [SubsidyStatusHistoryCreateManyPrevious_statusInput], {nullable:false})
    @Type(() => SubsidyStatusHistoryCreateManyPrevious_statusInput)
    data!: Array<SubsidyStatusHistoryCreateManyPrevious_statusInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
