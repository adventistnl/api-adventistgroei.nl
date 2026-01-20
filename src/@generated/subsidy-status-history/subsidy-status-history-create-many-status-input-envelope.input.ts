import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusHistoryCreateManyStatusInput } from './subsidy-status-history-create-many-status.input';
import { Type } from 'class-transformer';

@InputType()
export class SubsidyStatusHistoryCreateManyStatusInputEnvelope {

    @Field(() => [SubsidyStatusHistoryCreateManyStatusInput], {nullable:false})
    @Type(() => SubsidyStatusHistoryCreateManyStatusInput)
    data!: Array<SubsidyStatusHistoryCreateManyStatusInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
