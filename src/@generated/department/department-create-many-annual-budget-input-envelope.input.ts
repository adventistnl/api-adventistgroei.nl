import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateManyAnnual_budgetInput } from './department-create-many-annual-budget.input';
import { Type } from 'class-transformer';

@InputType()
export class DepartmentCreateManyAnnual_budgetInputEnvelope {

    @Field(() => [DepartmentCreateManyAnnual_budgetInput], {nullable:false})
    @Type(() => DepartmentCreateManyAnnual_budgetInput)
    data!: Array<DepartmentCreateManyAnnual_budgetInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
