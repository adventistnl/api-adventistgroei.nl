import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusCreateWithoutHistory_as_previousInput } from './subsidy-status-create-without-history-as-previous.input';
import { Type } from 'class-transformer';
import { SubsidyStatusCreateOrConnectWithoutHistory_as_previousInput } from './subsidy-status-create-or-connect-without-history-as-previous.input';
import { SubsidyStatusUpsertWithoutHistory_as_previousInput } from './subsidy-status-upsert-without-history-as-previous.input';
import { SubsidyStatusWhereInput } from './subsidy-status-where.input';
import { Prisma } from '@prisma/client';
import { SubsidyStatusWhereUniqueInput } from './subsidy-status-where-unique.input';
import { SubsidyStatusUpdateToOneWithWhereWithoutHistory_as_previousInput } from './subsidy-status-update-to-one-with-where-without-history-as-previous.input';

@InputType()
export class SubsidyStatusUpdateOneWithoutHistory_as_previousNestedInput {

    @Field(() => SubsidyStatusCreateWithoutHistory_as_previousInput, {nullable:true})
    @Type(() => SubsidyStatusCreateWithoutHistory_as_previousInput)
    create?: SubsidyStatusCreateWithoutHistory_as_previousInput;

    @Field(() => SubsidyStatusCreateOrConnectWithoutHistory_as_previousInput, {nullable:true})
    @Type(() => SubsidyStatusCreateOrConnectWithoutHistory_as_previousInput)
    connectOrCreate?: SubsidyStatusCreateOrConnectWithoutHistory_as_previousInput;

    @Field(() => SubsidyStatusUpsertWithoutHistory_as_previousInput, {nullable:true})
    @Type(() => SubsidyStatusUpsertWithoutHistory_as_previousInput)
    upsert?: SubsidyStatusUpsertWithoutHistory_as_previousInput;

    @Field(() => SubsidyStatusWhereInput, {nullable:true})
    @Type(() => SubsidyStatusWhereInput)
    disconnect?: SubsidyStatusWhereInput;

    @Field(() => SubsidyStatusWhereInput, {nullable:true})
    @Type(() => SubsidyStatusWhereInput)
    delete?: SubsidyStatusWhereInput;

    @Field(() => SubsidyStatusWhereUniqueInput, {nullable:true})
    @Type(() => SubsidyStatusWhereUniqueInput)
    connect?: Prisma.AtLeast<SubsidyStatusWhereUniqueInput, 'id'>;

    @Field(() => SubsidyStatusUpdateToOneWithWhereWithoutHistory_as_previousInput, {nullable:true})
    @Type(() => SubsidyStatusUpdateToOneWithWhereWithoutHistory_as_previousInput)
    update?: SubsidyStatusUpdateToOneWithWhereWithoutHistory_as_previousInput;
}
