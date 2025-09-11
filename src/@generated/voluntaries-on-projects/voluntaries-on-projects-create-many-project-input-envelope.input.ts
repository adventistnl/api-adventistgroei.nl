import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VoluntariesOnProjectsCreateManyProjectInput } from './voluntaries-on-projects-create-many-project.input';
import { Type } from 'class-transformer';

@InputType()
export class VoluntariesOnProjectsCreateManyProjectInputEnvelope {

    @Field(() => [VoluntariesOnProjectsCreateManyProjectInput], {nullable:false})
    @Type(() => VoluntariesOnProjectsCreateManyProjectInput)
    data!: Array<VoluntariesOnProjectsCreateManyProjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
