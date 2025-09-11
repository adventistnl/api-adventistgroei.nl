import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VoluntariesOnProjectsCreateInput } from './voluntaries-on-projects-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneVoluntariesOnProjectsArgs {

    @Field(() => VoluntariesOnProjectsCreateInput, {nullable:false})
    @Type(() => VoluntariesOnProjectsCreateInput)
    data!: VoluntariesOnProjectsCreateInput;
}
