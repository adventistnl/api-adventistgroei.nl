import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetCreateManyDepartmentInput } from './annual-budget-create-many-department.input';
import { Type } from 'class-transformer';

@InputType()
export class AnnualBudgetCreateManyDepartmentInputEnvelope {

    @Field(() => [AnnualBudgetCreateManyDepartmentInput], {nullable:false})
    @Type(() => AnnualBudgetCreateManyDepartmentInput)
    data!: Array<AnnualBudgetCreateManyDepartmentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
