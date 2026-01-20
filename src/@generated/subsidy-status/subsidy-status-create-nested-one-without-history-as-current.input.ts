import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusCreateWithoutHistory_as_currentInput } from './subsidy-status-create-without-history-as-current.input';
import { Type } from 'class-transformer';
import { SubsidyStatusCreateOrConnectWithoutHistory_as_currentInput } from './subsidy-status-create-or-connect-without-history-as-current.input';
import { Prisma } from '@prisma/client';
import { SubsidyStatusWhereUniqueInput } from './subsidy-status-where-unique.input';

@InputType()
export class SubsidyStatusCreateNestedOneWithoutHistory_as_currentInput {

    @Field(() => SubsidyStatusCreateWithoutHistory_as_currentInput, {nullable:true})
    @Type(() => SubsidyStatusCreateWithoutHistory_as_currentInput)
    create?: SubsidyStatusCreateWithoutHistory_as_currentInput;

    @Field(() => SubsidyStatusCreateOrConnectWithoutHistory_as_currentInput, {nullable:true})
    @Type(() => SubsidyStatusCreateOrConnectWithoutHistory_as_currentInput)
    connectOrCreate?: SubsidyStatusCreateOrConnectWithoutHistory_as_currentInput;

    @Field(() => SubsidyStatusWhereUniqueInput, {nullable:true})
    @Type(() => SubsidyStatusWhereUniqueInput)
    connect?: Prisma.AtLeast<SubsidyStatusWhereUniqueInput, 'id'>;
}
