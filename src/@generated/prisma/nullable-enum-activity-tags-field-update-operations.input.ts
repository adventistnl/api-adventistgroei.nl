import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityTags } from './activity-tags.enum';

@InputType()
export class NullableEnumActivityTagsFieldUpdateOperationsInput {

    @Field(() => ActivityTags, {nullable:true})
    set?: `${ActivityTags}`;
}
