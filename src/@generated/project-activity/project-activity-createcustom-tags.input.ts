import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ProjectActivityCreatecustom_tagsInput {

    @Field(() => [String], {nullable:false})
    set!: Array<string>;
}
