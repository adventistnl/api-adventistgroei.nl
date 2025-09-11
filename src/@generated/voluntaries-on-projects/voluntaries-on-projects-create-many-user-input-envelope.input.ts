import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VoluntariesOnProjectsCreateManyUserInput } from './voluntaries-on-projects-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class VoluntariesOnProjectsCreateManyUserInputEnvelope {

    @Field(() => [VoluntariesOnProjectsCreateManyUserInput], {nullable:false})
    @Type(() => VoluntariesOnProjectsCreateManyUserInput)
    data!: Array<VoluntariesOnProjectsCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
