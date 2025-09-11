import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VoluntariesOnProjectsWhereInput } from './voluntaries-on-projects-where.input';

@InputType()
export class VoluntariesOnProjectsListRelationFilter {

    @Field(() => VoluntariesOnProjectsWhereInput, {nullable:true})
    every?: VoluntariesOnProjectsWhereInput;

    @Field(() => VoluntariesOnProjectsWhereInput, {nullable:true})
    some?: VoluntariesOnProjectsWhereInput;

    @Field(() => VoluntariesOnProjectsWhereInput, {nullable:true})
    none?: VoluntariesOnProjectsWhereInput;
}
