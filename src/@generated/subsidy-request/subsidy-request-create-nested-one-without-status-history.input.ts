import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestCreateWithoutStatus_historyInput } from './subsidy-request-create-without-status-history.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateOrConnectWithoutStatus_historyInput } from './subsidy-request-create-or-connect-without-status-history.input';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';

@InputType()
export class SubsidyRequestCreateNestedOneWithoutStatus_historyInput {

    @Field(() => SubsidyRequestCreateWithoutStatus_historyInput, {nullable:true})
    @Type(() => SubsidyRequestCreateWithoutStatus_historyInput)
    create?: SubsidyRequestCreateWithoutStatus_historyInput;

    @Field(() => SubsidyRequestCreateOrConnectWithoutStatus_historyInput, {nullable:true})
    @Type(() => SubsidyRequestCreateOrConnectWithoutStatus_historyInput)
    connectOrCreate?: SubsidyRequestCreateOrConnectWithoutStatus_historyInput;

    @Field(() => SubsidyRequestWhereUniqueInput, {nullable:true})
    @Type(() => SubsidyRequestWhereUniqueInput)
    connect?: Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>;
}
