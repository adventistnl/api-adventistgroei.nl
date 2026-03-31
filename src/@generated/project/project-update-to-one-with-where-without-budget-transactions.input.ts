import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereInput } from './project-where.input';
import { Type } from 'class-transformer';
import { ProjectUpdateWithoutBudget_transactionsInput } from './project-update-without-budget-transactions.input';

@InputType()
export class ProjectUpdateToOneWithWhereWithoutBudget_transactionsInput {

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: ProjectWhereInput;

    @Field(() => ProjectUpdateWithoutBudget_transactionsInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutBudget_transactionsInput)
    data!: ProjectUpdateWithoutBudget_transactionsInput;
}
