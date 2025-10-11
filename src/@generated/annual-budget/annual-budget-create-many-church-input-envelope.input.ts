import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetCreateManyChurchInput } from './annual-budget-create-many-church.input';
import { Type } from 'class-transformer';

@InputType()
export class AnnualBudgetCreateManyChurchInputEnvelope {

    @Field(() => [AnnualBudgetCreateManyChurchInput], {nullable:false})
    @Type(() => AnnualBudgetCreateManyChurchInput)
    data!: Array<AnnualBudgetCreateManyChurchInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
