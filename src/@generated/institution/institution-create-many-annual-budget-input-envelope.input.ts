import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateManyAnnual_budgetInput } from './institution-create-many-annual-budget.input';
import { Type } from 'class-transformer';

@InputType()
export class InstitutionCreateManyAnnual_budgetInputEnvelope {

    @Field(() => [InstitutionCreateManyAnnual_budgetInput], {nullable:false})
    @Type(() => InstitutionCreateManyAnnual_budgetInput)
    data!: Array<InstitutionCreateManyAnnual_budgetInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
