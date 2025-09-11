import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class VoluntariesOnProjectsCreateManyUserInput {

    @Field(() => String, {nullable:false})
    project_id!: string;
}
