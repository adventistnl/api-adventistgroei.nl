import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusCreateWithoutAssigned_userInput } from './subsidy-status-create-without-assigned-user.input';
import { Type } from 'class-transformer';
import { SubsidyStatusCreateOrConnectWithoutAssigned_userInput } from './subsidy-status-create-or-connect-without-assigned-user.input';
import { SubsidyStatusCreateManyAssigned_userInputEnvelope } from './subsidy-status-create-many-assigned-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyStatusWhereUniqueInput } from './subsidy-status-where-unique.input';

@InputType()
export class SubsidyStatusCreateNestedManyWithoutAssigned_userInput {

    @Field(() => [SubsidyStatusCreateWithoutAssigned_userInput], {nullable:true})
    @Type(() => SubsidyStatusCreateWithoutAssigned_userInput)
    create?: Array<SubsidyStatusCreateWithoutAssigned_userInput>;

    @Field(() => [SubsidyStatusCreateOrConnectWithoutAssigned_userInput], {nullable:true})
    @Type(() => SubsidyStatusCreateOrConnectWithoutAssigned_userInput)
    connectOrCreate?: Array<SubsidyStatusCreateOrConnectWithoutAssigned_userInput>;

    @Field(() => SubsidyStatusCreateManyAssigned_userInputEnvelope, {nullable:true})
    @Type(() => SubsidyStatusCreateManyAssigned_userInputEnvelope)
    createMany?: SubsidyStatusCreateManyAssigned_userInputEnvelope;

    @Field(() => [SubsidyStatusWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyStatusWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubsidyStatusWhereUniqueInput, 'id'>>;
}
