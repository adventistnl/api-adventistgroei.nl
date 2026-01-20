import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityTags } from '../prisma/activity-tags.enum';

@InputType()
export class ProjectActivityCreatetagsInput {

    @Field(() => [ActivityTags], {nullable:false})
    set!: Array<`${ActivityTags}`>;
}
