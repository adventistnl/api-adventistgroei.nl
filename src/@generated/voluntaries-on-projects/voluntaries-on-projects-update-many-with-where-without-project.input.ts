import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VoluntariesOnProjectsScalarWhereInput } from './voluntaries-on-projects-scalar-where.input';
import { Type } from 'class-transformer';
import { VoluntariesOnProjectsUpdateManyMutationInput } from './voluntaries-on-projects-update-many-mutation.input';

@InputType()
export class VoluntariesOnProjectsUpdateManyWithWhereWithoutProjectInput {

    @Field(() => VoluntariesOnProjectsScalarWhereInput, {nullable:false})
    @Type(() => VoluntariesOnProjectsScalarWhereInput)
    where!: VoluntariesOnProjectsScalarWhereInput;

    @Field(() => VoluntariesOnProjectsUpdateManyMutationInput, {nullable:false})
    @Type(() => VoluntariesOnProjectsUpdateManyMutationInput)
    data!: VoluntariesOnProjectsUpdateManyMutationInput;
}
