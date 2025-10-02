import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityDocumentsCreateManyProject_activityInput } from './activity-documents-create-many-project-activity.input';
import { Type } from 'class-transformer';

@InputType()
export class ActivityDocumentsCreateManyProject_activityInputEnvelope {

    @Field(() => [ActivityDocumentsCreateManyProject_activityInput], {nullable:false})
    @Type(() => ActivityDocumentsCreateManyProject_activityInput)
    data!: Array<ActivityDocumentsCreateManyProject_activityInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
