import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestItemCreateManyProject_activityInput } from './subsidy-request-item-create-many-project-activity.input';
import { Type } from 'class-transformer';

@InputType()
export class SubsidyRequestItemCreateManyProject_activityInputEnvelope {

    @Field(() => [SubsidyRequestItemCreateManyProject_activityInput], {nullable:false})
    @Type(() => SubsidyRequestItemCreateManyProject_activityInput)
    data!: Array<SubsidyRequestItemCreateManyProject_activityInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
