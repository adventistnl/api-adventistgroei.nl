import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateManyAnnual_budget_refInput } from './department-create-many-annual-budget-ref.input';
import { Type } from 'class-transformer';

@InputType()
export class DepartmentCreateManyAnnual_budget_refInputEnvelope {

    @Field(() => [DepartmentCreateManyAnnual_budget_refInput], {nullable:false})
    @Type(() => DepartmentCreateManyAnnual_budget_refInput)
    data!: Array<DepartmentCreateManyAnnual_budget_refInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
