import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpecialProjectsScalarWhereInput } from './special-projects-scalar-where.input';
import { Type } from 'class-transformer';
import { SpecialProjectsUpdateManyMutationInput } from './special-projects-update-many-mutation.input';

@InputType()
export class SpecialProjectsUpdateManyWithWhereWithoutSubsidy_statusInput {

    @Field(() => SpecialProjectsScalarWhereInput, {nullable:false})
    @Type(() => SpecialProjectsScalarWhereInput)
    where!: SpecialProjectsScalarWhereInput;

    @Field(() => SpecialProjectsUpdateManyMutationInput, {nullable:false})
    @Type(() => SpecialProjectsUpdateManyMutationInput)
    data!: SpecialProjectsUpdateManyMutationInput;
}
