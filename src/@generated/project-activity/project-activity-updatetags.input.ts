import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityTags } from '../prisma/activity-tags.enum';

@InputType()
export class ProjectActivityUpdatetagsInput {

    @Field(() => [ActivityTags], {nullable:true})
    set?: Array<`${ActivityTags}`>;

    @Field(() => [ActivityTags], {nullable:true})
    push?: Array<`${ActivityTags}`>;
}
