import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionScalarWhereInput } from './region-scalar-where.input';
import { Type } from 'class-transformer';
import { RegionUpdateManyMutationInput } from './region-update-many-mutation.input';

@InputType()
export class RegionUpdateManyWithWhereWithoutAnnual_budgetInput {

    @Field(() => RegionScalarWhereInput, {nullable:false})
    @Type(() => RegionScalarWhereInput)
    where!: RegionScalarWhereInput;

    @Field(() => RegionUpdateManyMutationInput, {nullable:false})
    @Type(() => RegionUpdateManyMutationInput)
    data!: RegionUpdateManyMutationInput;
}
