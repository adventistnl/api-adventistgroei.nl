import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutBudget_transactionsInput } from './project-create-without-budget-transactions.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutBudget_transactionsInput } from './project-create-or-connect-without-budget-transactions.input';
import { ProjectUpsertWithoutBudget_transactionsInput } from './project-upsert-without-budget-transactions.input';
import { ProjectWhereInput } from './project-where.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateToOneWithWhereWithoutBudget_transactionsInput } from './project-update-to-one-with-where-without-budget-transactions.input';

@InputType()
export class ProjectUpdateOneWithoutBudget_transactionsNestedInput {

    @Field(() => ProjectCreateWithoutBudget_transactionsInput, {nullable:true})
    @Type(() => ProjectCreateWithoutBudget_transactionsInput)
    create?: ProjectCreateWithoutBudget_transactionsInput;

    @Field(() => ProjectCreateOrConnectWithoutBudget_transactionsInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutBudget_transactionsInput)
    connectOrCreate?: ProjectCreateOrConnectWithoutBudget_transactionsInput;

    @Field(() => ProjectUpsertWithoutBudget_transactionsInput, {nullable:true})
    @Type(() => ProjectUpsertWithoutBudget_transactionsInput)
    upsert?: ProjectUpsertWithoutBudget_transactionsInput;

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    disconnect?: ProjectWhereInput;

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    delete?: ProjectWhereInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectUpdateToOneWithWhereWithoutBudget_transactionsInput, {nullable:true})
    @Type(() => ProjectUpdateToOneWithWhereWithoutBudget_transactionsInput)
    update?: ProjectUpdateToOneWithWhereWithoutBudget_transactionsInput;
}
