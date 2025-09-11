import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class VoluntariesOnProjectsUncheckedCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    project_id!: string;
}
