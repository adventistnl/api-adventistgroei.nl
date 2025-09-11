import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VoluntariesOnProjectsScalarWhereInput } from './voluntaries-on-projects-scalar-where.input';
import { Type } from 'class-transformer';
import { VoluntariesOnProjectsUncheckedUpdateManyWithoutProjectInput } from './voluntaries-on-projects-unchecked-update-many-without-project.input';

@InputType()
export class VoluntariesOnProjectsUpdateManyWithWhereWithoutProjectInput {

    @Field(() => VoluntariesOnProjectsScalarWhereInput, {nullable:false})
    @Type(() => VoluntariesOnProjectsScalarWhereInput)
    where!: VoluntariesOnProjectsScalarWhereInput;

    @Field(() => VoluntariesOnProjectsUncheckedUpdateManyWithoutProjectInput, {nullable:false})
    @Type(() => VoluntariesOnProjectsUncheckedUpdateManyWithoutProjectInput)
    data!: VoluntariesOnProjectsUncheckedUpdateManyWithoutProjectInput;
}
