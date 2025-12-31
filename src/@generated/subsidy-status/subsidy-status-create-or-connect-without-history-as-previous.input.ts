import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyStatusWhereUniqueInput } from './subsidy-status-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyStatusCreateWithoutHistory_as_previousInput } from './subsidy-status-create-without-history-as-previous.input';

@InputType()
export class SubsidyStatusCreateOrConnectWithoutHistory_as_previousInput {

    @Field(() => SubsidyStatusWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyStatusWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyStatusWhereUniqueInput, 'id'>;

    @Field(() => SubsidyStatusCreateWithoutHistory_as_previousInput, {nullable:false})
    @Type(() => SubsidyStatusCreateWithoutHistory_as_previousInput)
    create!: SubsidyStatusCreateWithoutHistory_as_previousInput;
}
