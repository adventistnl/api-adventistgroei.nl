import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestCreateWithoutStatus_historyInput } from './subsidy-request-create-without-status-history.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateOrConnectWithoutStatus_historyInput } from './subsidy-request-create-or-connect-without-status-history.input';
import { SubsidyRequestUpsertWithoutStatus_historyInput } from './subsidy-request-upsert-without-status-history.input';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';
import { SubsidyRequestUpdateToOneWithWhereWithoutStatus_historyInput } from './subsidy-request-update-to-one-with-where-without-status-history.input';

@InputType()
export class SubsidyRequestUpdateOneRequiredWithoutStatus_historyNestedInput {

    @Field(() => SubsidyRequestCreateWithoutStatus_historyInput, {nullable:true})
    @Type(() => SubsidyRequestCreateWithoutStatus_historyInput)
    create?: SubsidyRequestCreateWithoutStatus_historyInput;

    @Field(() => SubsidyRequestCreateOrConnectWithoutStatus_historyInput, {nullable:true})
    @Type(() => SubsidyRequestCreateOrConnectWithoutStatus_historyInput)
    connectOrCreate?: SubsidyRequestCreateOrConnectWithoutStatus_historyInput;

    @Field(() => SubsidyRequestUpsertWithoutStatus_historyInput, {nullable:true})
    @Type(() => SubsidyRequestUpsertWithoutStatus_historyInput)
    upsert?: SubsidyRequestUpsertWithoutStatus_historyInput;

    @Field(() => SubsidyRequestWhereUniqueInput, {nullable:true})
    @Type(() => SubsidyRequestWhereUniqueInput)
    connect?: Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>;

    @Field(() => SubsidyRequestUpdateToOneWithWhereWithoutStatus_historyInput, {nullable:true})
    @Type(() => SubsidyRequestUpdateToOneWithWhereWithoutStatus_historyInput)
    update?: SubsidyRequestUpdateToOneWithWhereWithoutStatus_historyInput;
}
