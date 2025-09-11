import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VoluntariesOnProjectsCreateManyInput } from './voluntaries-on-projects-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyVoluntariesOnProjectsArgs {

    @Field(() => [VoluntariesOnProjectsCreateManyInput], {nullable:false})
    @Type(() => VoluntariesOnProjectsCreateManyInput)
    data!: Array<VoluntariesOnProjectsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
