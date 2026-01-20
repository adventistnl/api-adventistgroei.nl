import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusCreateWithoutHistory_as_previousInput } from './subsidy-status-create-without-history-as-previous.input';
import { Type } from 'class-transformer';
import { SubsidyStatusCreateOrConnectWithoutHistory_as_previousInput } from './subsidy-status-create-or-connect-without-history-as-previous.input';
import { Prisma } from '@prisma/client';
import { SubsidyStatusWhereUniqueInput } from './subsidy-status-where-unique.input';

@InputType()
export class SubsidyStatusCreateNestedOneWithoutHistory_as_previousInput {

    @Field(() => SubsidyStatusCreateWithoutHistory_as_previousInput, {nullable:true})
    @Type(() => SubsidyStatusCreateWithoutHistory_as_previousInput)
    create?: SubsidyStatusCreateWithoutHistory_as_previousInput;

    @Field(() => SubsidyStatusCreateOrConnectWithoutHistory_as_previousInput, {nullable:true})
    @Type(() => SubsidyStatusCreateOrConnectWithoutHistory_as_previousInput)
    connectOrCreate?: SubsidyStatusCreateOrConnectWithoutHistory_as_previousInput;

    @Field(() => SubsidyStatusWhereUniqueInput, {nullable:true})
    @Type(() => SubsidyStatusWhereUniqueInput)
    connect?: Prisma.AtLeast<SubsidyStatusWhereUniqueInput, 'id'>;
}
