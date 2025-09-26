import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionScalarWhereInput } from './institution-scalar-where.input';
import { Type } from 'class-transformer';
import { InstitutionUpdateManyMutationInput } from './institution-update-many-mutation.input';

@InputType()
export class InstitutionUpdateManyWithWhereWithoutAnnual_budgetInput {

    @Field(() => InstitutionScalarWhereInput, {nullable:false})
    @Type(() => InstitutionScalarWhereInput)
    where!: InstitutionScalarWhereInput;

    @Field(() => InstitutionUpdateManyMutationInput, {nullable:false})
    @Type(() => InstitutionUpdateManyMutationInput)
    data!: InstitutionUpdateManyMutationInput;
}
