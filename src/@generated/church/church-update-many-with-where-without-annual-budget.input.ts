import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchScalarWhereInput } from './church-scalar-where.input';
import { Type } from 'class-transformer';
import { ChurchUpdateManyMutationInput } from './church-update-many-mutation.input';

@InputType()
export class ChurchUpdateManyWithWhereWithoutAnnual_budgetInput {

    @Field(() => ChurchScalarWhereInput, {nullable:false})
    @Type(() => ChurchScalarWhereInput)
    where!: ChurchScalarWhereInput;

    @Field(() => ChurchUpdateManyMutationInput, {nullable:false})
    @Type(() => ChurchUpdateManyMutationInput)
    data!: ChurchUpdateManyMutationInput;
}
