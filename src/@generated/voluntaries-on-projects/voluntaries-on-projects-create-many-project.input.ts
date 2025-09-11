import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class VoluntariesOnProjectsCreateManyProjectInput {

    @Field(() => String, {nullable:false})
    user_id!: string;
}
