import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutBudget_transactionsInput } from './project-create-without-budget-transactions.input';

@InputType()
export class ProjectCreateOrConnectWithoutBudget_transactionsInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectCreateWithoutBudget_transactionsInput, {nullable:false})
    @Type(() => ProjectCreateWithoutBudget_transactionsInput)
    create!: ProjectCreateWithoutBudget_transactionsInput;
}
