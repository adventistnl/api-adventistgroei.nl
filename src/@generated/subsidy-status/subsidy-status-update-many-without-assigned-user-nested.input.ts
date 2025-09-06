import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusCreateWithoutAssigned_userInput } from './subsidy-status-create-without-assigned-user.input';
import { Type } from 'class-transformer';
import { SubsidyStatusCreateOrConnectWithoutAssigned_userInput } from './subsidy-status-create-or-connect-without-assigned-user.input';
import { SubsidyStatusUpsertWithWhereUniqueWithoutAssigned_userInput } from './subsidy-status-upsert-with-where-unique-without-assigned-user.input';
import { SubsidyStatusCreateManyAssigned_userInputEnvelope } from './subsidy-status-create-many-assigned-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyStatusWhereUniqueInput } from './subsidy-status-where-unique.input';
import { SubsidyStatusUpdateWithWhereUniqueWithoutAssigned_userInput } from './subsidy-status-update-with-where-unique-without-assigned-user.input';
import { SubsidyStatusUpdateManyWithWhereWithoutAssigned_userInput } from './subsidy-status-update-many-with-where-without-assigned-user.input';
import { SubsidyStatusScalarWhereInput } from './subsidy-status-scalar-where.input';

@InputType()
export class SubsidyStatusUpdateManyWithoutAssigned_userNestedInput {

    @Field(() => [SubsidyStatusCreateWithoutAssigned_userInput], {nullable:true})
    @Type(() => SubsidyStatusCreateWithoutAssigned_userInput)
    create?: Array<SubsidyStatusCreateWithoutAssigned_userInput>;

    @Field(() => [SubsidyStatusCreateOrConnectWithoutAssigned_userInput], {nullable:true})
    @Type(() => SubsidyStatusCreateOrConnectWithoutAssigned_userInput)
    connectOrCreate?: Array<SubsidyStatusCreateOrConnectWithoutAssigned_userInput>;

    @Field(() => [SubsidyStatusUpsertWithWhereUniqueWithoutAssigned_userInput], {nullable:true})
    @Type(() => SubsidyStatusUpsertWithWhereUniqueWithoutAssigned_userInput)
    upsert?: Array<SubsidyStatusUpsertWithWhereUniqueWithoutAssigned_userInput>;

    @Field(() => SubsidyStatusCreateManyAssigned_userInputEnvelope, {nullable:true})
    @Type(() => SubsidyStatusCreateManyAssigned_userInputEnvelope)
    createMany?: SubsidyStatusCreateManyAssigned_userInputEnvelope;

    @Field(() => [SubsidyStatusWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyStatusWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SubsidyStatusWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyStatusWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyStatusWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SubsidyStatusWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyStatusWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyStatusWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SubsidyStatusWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyStatusWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyStatusWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubsidyStatusWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyStatusUpdateWithWhereUniqueWithoutAssigned_userInput], {nullable:true})
    @Type(() => SubsidyStatusUpdateWithWhereUniqueWithoutAssigned_userInput)
    update?: Array<SubsidyStatusUpdateWithWhereUniqueWithoutAssigned_userInput>;

    @Field(() => [SubsidyStatusUpdateManyWithWhereWithoutAssigned_userInput], {nullable:true})
    @Type(() => SubsidyStatusUpdateManyWithWhereWithoutAssigned_userInput)
    updateMany?: Array<SubsidyStatusUpdateManyWithWhereWithoutAssigned_userInput>;

    @Field(() => [SubsidyStatusScalarWhereInput], {nullable:true})
    @Type(() => SubsidyStatusScalarWhereInput)
    deleteMany?: Array<SubsidyStatusScalarWhereInput>;
}
