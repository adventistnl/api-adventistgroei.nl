import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityFundingCreateManyInput } from './activity-funding-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyActivityFundingArgs {

    @Field(() => [ActivityFundingCreateManyInput], {nullable:false})
    @Type(() => ActivityFundingCreateManyInput)
    data!: Array<ActivityFundingCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
