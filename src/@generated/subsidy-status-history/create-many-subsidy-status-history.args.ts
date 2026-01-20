import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyStatusHistoryCreateManyInput } from './subsidy-status-history-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySubsidyStatusHistoryArgs {

    @Field(() => [SubsidyStatusHistoryCreateManyInput], {nullable:false})
    @Type(() => SubsidyStatusHistoryCreateManyInput)
    data!: Array<SubsidyStatusHistoryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
