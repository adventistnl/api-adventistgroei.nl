import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class VoluntariesOnProjectsScalarWhereInput {

    @Field(() => [VoluntariesOnProjectsScalarWhereInput], {nullable:true})
    AND?: Array<VoluntariesOnProjectsScalarWhereInput>;

    @Field(() => [VoluntariesOnProjectsScalarWhereInput], {nullable:true})
    OR?: Array<VoluntariesOnProjectsScalarWhereInput>;

    @Field(() => [VoluntariesOnProjectsScalarWhereInput], {nullable:true})
    NOT?: Array<VoluntariesOnProjectsScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    user_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    project_id?: StringFilter;
}
