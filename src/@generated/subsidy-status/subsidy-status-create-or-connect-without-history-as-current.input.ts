import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyStatusWhereUniqueInput } from './subsidy-status-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyStatusCreateWithoutHistory_as_currentInput } from './subsidy-status-create-without-history-as-current.input';

@InputType()
export class SubsidyStatusCreateOrConnectWithoutHistory_as_currentInput {

    @Field(() => SubsidyStatusWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyStatusWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyStatusWhereUniqueInput, 'id'>;

    @Field(() => SubsidyStatusCreateWithoutHistory_as_currentInput, {nullable:false})
    @Type(() => SubsidyStatusCreateWithoutHistory_as_currentInput)
    create!: SubsidyStatusCreateWithoutHistory_as_currentInput;
}
