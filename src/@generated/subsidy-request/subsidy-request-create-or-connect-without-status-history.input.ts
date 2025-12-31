import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateWithoutStatus_historyInput } from './subsidy-request-create-without-status-history.input';

@InputType()
export class SubsidyRequestCreateOrConnectWithoutStatus_historyInput {

    @Field(() => SubsidyRequestWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyRequestWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>;

    @Field(() => SubsidyRequestCreateWithoutStatus_historyInput, {nullable:false})
    @Type(() => SubsidyRequestCreateWithoutStatus_historyInput)
    create!: SubsidyRequestCreateWithoutStatus_historyInput;
}
