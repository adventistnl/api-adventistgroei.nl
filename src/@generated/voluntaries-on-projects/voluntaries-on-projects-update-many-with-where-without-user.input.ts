import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VoluntariesOnProjectsScalarWhereInput } from './voluntaries-on-projects-scalar-where.input';
import { Type } from 'class-transformer';
import { VoluntariesOnProjectsUncheckedUpdateManyWithoutUserInput } from './voluntaries-on-projects-unchecked-update-many-without-user.input';

@InputType()
export class VoluntariesOnProjectsUpdateManyWithWhereWithoutUserInput {

    @Field(() => VoluntariesOnProjectsScalarWhereInput, {nullable:false})
    @Type(() => VoluntariesOnProjectsScalarWhereInput)
    where!: VoluntariesOnProjectsScalarWhereInput;

    @Field(() => VoluntariesOnProjectsUncheckedUpdateManyWithoutUserInput, {nullable:false})
    @Type(() => VoluntariesOnProjectsUncheckedUpdateManyWithoutUserInput)
    data!: VoluntariesOnProjectsUncheckedUpdateManyWithoutUserInput;
}
