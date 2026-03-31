import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutBudget_transactionsInput } from './project-create-without-budget-transactions.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutBudget_transactionsInput } from './project-create-or-connect-without-budget-transactions.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectCreateNestedOneWithoutBudget_transactionsInput {

    @Field(() => ProjectCreateWithoutBudget_transactionsInput, {nullable:true})
    @Type(() => ProjectCreateWithoutBudget_transactionsInput)
    create?: ProjectCreateWithoutBudget_transactionsInput;

    @Field(() => ProjectCreateOrConnectWithoutBudget_transactionsInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutBudget_transactionsInput)
    connectOrCreate?: ProjectCreateOrConnectWithoutBudget_transactionsInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;
}
