import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyStatusHistoryWhereUniqueInput } from './subsidy-status-history-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyStatusHistoryCreateWithoutUserInput } from './subsidy-status-history-create-without-user.input';

@InputType()
export class SubsidyStatusHistoryCreateOrConnectWithoutUserInput {

    @Field(() => SubsidyStatusHistoryWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyStatusHistoryWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyStatusHistoryWhereUniqueInput, 'id'>;

    @Field(() => SubsidyStatusHistoryCreateWithoutUserInput, {nullable:false})
    @Type(() => SubsidyStatusHistoryCreateWithoutUserInput)
    create!: SubsidyStatusHistoryCreateWithoutUserInput;
}
