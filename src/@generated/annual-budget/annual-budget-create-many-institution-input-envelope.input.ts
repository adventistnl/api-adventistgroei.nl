import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetCreateManyInstitutionInput } from './annual-budget-create-many-institution.input';
import { Type } from 'class-transformer';

@InputType()
export class AnnualBudgetCreateManyInstitutionInputEnvelope {

    @Field(() => [AnnualBudgetCreateManyInstitutionInput], {nullable:false})
    @Type(() => AnnualBudgetCreateManyInstitutionInput)
    data!: Array<AnnualBudgetCreateManyInstitutionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
