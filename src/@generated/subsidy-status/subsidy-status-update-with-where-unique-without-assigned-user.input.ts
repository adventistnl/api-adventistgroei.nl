import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyStatusWhereUniqueInput } from './subsidy-status-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyStatusUpdateWithoutAssigned_userInput } from './subsidy-status-update-without-assigned-user.input';

@InputType()
export class SubsidyStatusUpdateWithWhereUniqueWithoutAssigned_userInput {

    @Field(() => SubsidyStatusWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyStatusWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyStatusWhereUniqueInput, 'id'>;

    @Field(() => SubsidyStatusUpdateWithoutAssigned_userInput, {nullable:false})
    @Type(() => SubsidyStatusUpdateWithoutAssigned_userInput)
    data!: SubsidyStatusUpdateWithoutAssigned_userInput;
}
