import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusCreateWithoutHistory_as_currentInput } from './subsidy-status-create-without-history-as-current.input';
import { Type } from 'class-transformer';
import { SubsidyStatusCreateOrConnectWithoutHistory_as_currentInput } from './subsidy-status-create-or-connect-without-history-as-current.input';
import { SubsidyStatusUpsertWithoutHistory_as_currentInput } from './subsidy-status-upsert-without-history-as-current.input';
import { Prisma } from '@prisma/client';
import { SubsidyStatusWhereUniqueInput } from './subsidy-status-where-unique.input';
import { SubsidyStatusUpdateToOneWithWhereWithoutHistory_as_currentInput } from './subsidy-status-update-to-one-with-where-without-history-as-current.input';

@InputType()
export class SubsidyStatusUpdateOneRequiredWithoutHistory_as_currentNestedInput {

    @Field(() => SubsidyStatusCreateWithoutHistory_as_currentInput, {nullable:true})
    @Type(() => SubsidyStatusCreateWithoutHistory_as_currentInput)
    create?: SubsidyStatusCreateWithoutHistory_as_currentInput;

    @Field(() => SubsidyStatusCreateOrConnectWithoutHistory_as_currentInput, {nullable:true})
    @Type(() => SubsidyStatusCreateOrConnectWithoutHistory_as_currentInput)
    connectOrCreate?: SubsidyStatusCreateOrConnectWithoutHistory_as_currentInput;

    @Field(() => SubsidyStatusUpsertWithoutHistory_as_currentInput, {nullable:true})
    @Type(() => SubsidyStatusUpsertWithoutHistory_as_currentInput)
    upsert?: SubsidyStatusUpsertWithoutHistory_as_currentInput;

    @Field(() => SubsidyStatusWhereUniqueInput, {nullable:true})
    @Type(() => SubsidyStatusWhereUniqueInput)
    connect?: Prisma.AtLeast<SubsidyStatusWhereUniqueInput, 'id'>;

    @Field(() => SubsidyStatusUpdateToOneWithWhereWithoutHistory_as_currentInput, {nullable:true})
    @Type(() => SubsidyStatusUpdateToOneWithWhereWithoutHistory_as_currentInput)
    update?: SubsidyStatusUpdateToOneWithWhereWithoutHistory_as_currentInput;
}
