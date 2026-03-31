import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectUpdateWithoutBudget_transactionsInput } from './project-update-without-budget-transactions.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutBudget_transactionsInput } from './project-create-without-budget-transactions.input';
import { ProjectWhereInput } from './project-where.input';

@InputType()
export class ProjectUpsertWithoutBudget_transactionsInput {

    @Field(() => ProjectUpdateWithoutBudget_transactionsInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutBudget_transactionsInput)
    update!: ProjectUpdateWithoutBudget_transactionsInput;

    @Field(() => ProjectCreateWithoutBudget_transactionsInput, {nullable:false})
    @Type(() => ProjectCreateWithoutBudget_transactionsInput)
    create!: ProjectCreateWithoutBudget_transactionsInput;

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: ProjectWhereInput;
}
