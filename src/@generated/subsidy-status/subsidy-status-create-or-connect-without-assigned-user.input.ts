import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyStatusWhereUniqueInput } from './subsidy-status-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyStatusCreateWithoutAssigned_userInput } from './subsidy-status-create-without-assigned-user.input';

@InputType()
export class SubsidyStatusCreateOrConnectWithoutAssigned_userInput {

    @Field(() => SubsidyStatusWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyStatusWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyStatusWhereUniqueInput, 'id'>;

    @Field(() => SubsidyStatusCreateWithoutAssigned_userInput, {nullable:false})
    @Type(() => SubsidyStatusCreateWithoutAssigned_userInput)
    create!: SubsidyStatusCreateWithoutAssigned_userInput;
}
