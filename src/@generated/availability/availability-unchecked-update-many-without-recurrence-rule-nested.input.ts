import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityCreateWithoutRecurrence_ruleInput } from './availability-create-without-recurrence-rule.input';
import { Type } from 'class-transformer';
import { AvailabilityCreateOrConnectWithoutRecurrence_ruleInput } from './availability-create-or-connect-without-recurrence-rule.input';
import { AvailabilityUpsertWithWhereUniqueWithoutRecurrence_ruleInput } from './availability-upsert-with-where-unique-without-recurrence-rule.input';
import { AvailabilityCreateManyRecurrence_ruleInputEnvelope } from './availability-create-many-recurrence-rule-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AvailabilityWhereUniqueInput } from './availability-where-unique.input';
import { AvailabilityUpdateWithWhereUniqueWithoutRecurrence_ruleInput } from './availability-update-with-where-unique-without-recurrence-rule.input';
import { AvailabilityUpdateManyWithWhereWithoutRecurrence_ruleInput } from './availability-update-many-with-where-without-recurrence-rule.input';
import { AvailabilityScalarWhereInput } from './availability-scalar-where.input';

@InputType()
export class AvailabilityUncheckedUpdateManyWithoutRecurrence_ruleNestedInput {

    @Field(() => [AvailabilityCreateWithoutRecurrence_ruleInput], {nullable:true})
    @Type(() => AvailabilityCreateWithoutRecurrence_ruleInput)
    create?: Array<AvailabilityCreateWithoutRecurrence_ruleInput>;

    @Field(() => [AvailabilityCreateOrConnectWithoutRecurrence_ruleInput], {nullable:true})
    @Type(() => AvailabilityCreateOrConnectWithoutRecurrence_ruleInput)
    connectOrCreate?: Array<AvailabilityCreateOrConnectWithoutRecurrence_ruleInput>;

    @Field(() => [AvailabilityUpsertWithWhereUniqueWithoutRecurrence_ruleInput], {nullable:true})
    @Type(() => AvailabilityUpsertWithWhereUniqueWithoutRecurrence_ruleInput)
    upsert?: Array<AvailabilityUpsertWithWhereUniqueWithoutRecurrence_ruleInput>;

    @Field(() => AvailabilityCreateManyRecurrence_ruleInputEnvelope, {nullable:true})
    @Type(() => AvailabilityCreateManyRecurrence_ruleInputEnvelope)
    createMany?: AvailabilityCreateManyRecurrence_ruleInputEnvelope;

    @Field(() => [AvailabilityWhereUniqueInput], {nullable:true})
    @Type(() => AvailabilityWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AvailabilityWhereUniqueInput, 'id' | 'user_id_date'>>;

    @Field(() => [AvailabilityWhereUniqueInput], {nullable:true})
    @Type(() => AvailabilityWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AvailabilityWhereUniqueInput, 'id' | 'user_id_date'>>;

    @Field(() => [AvailabilityWhereUniqueInput], {nullable:true})
    @Type(() => AvailabilityWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AvailabilityWhereUniqueInput, 'id' | 'user_id_date'>>;

    @Field(() => [AvailabilityWhereUniqueInput], {nullable:true})
    @Type(() => AvailabilityWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AvailabilityWhereUniqueInput, 'id' | 'user_id_date'>>;

    @Field(() => [AvailabilityUpdateWithWhereUniqueWithoutRecurrence_ruleInput], {nullable:true})
    @Type(() => AvailabilityUpdateWithWhereUniqueWithoutRecurrence_ruleInput)
    update?: Array<AvailabilityUpdateWithWhereUniqueWithoutRecurrence_ruleInput>;

    @Field(() => [AvailabilityUpdateManyWithWhereWithoutRecurrence_ruleInput], {nullable:true})
    @Type(() => AvailabilityUpdateManyWithWhereWithoutRecurrence_ruleInput)
    updateMany?: Array<AvailabilityUpdateManyWithWhereWithoutRecurrence_ruleInput>;

    @Field(() => [AvailabilityScalarWhereInput], {nullable:true})
    @Type(() => AvailabilityScalarWhereInput)
    deleteMany?: Array<AvailabilityScalarWhereInput>;
}
