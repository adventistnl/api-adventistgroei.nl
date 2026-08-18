import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutAvailability_recurrence_rulesInput } from './institution-create-without-availability-recurrence-rules.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutAvailability_recurrence_rulesInput } from './institution-create-or-connect-without-availability-recurrence-rules.input';
import { InstitutionUpsertWithoutAvailability_recurrence_rulesInput } from './institution-upsert-without-availability-recurrence-rules.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { InstitutionUpdateToOneWithWhereWithoutAvailability_recurrence_rulesInput } from './institution-update-to-one-with-where-without-availability-recurrence-rules.input';

@InputType()
export class InstitutionUpdateOneRequiredWithoutAvailability_recurrence_rulesNestedInput {

    @Field(() => InstitutionCreateWithoutAvailability_recurrence_rulesInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutAvailability_recurrence_rulesInput)
    create?: InstitutionCreateWithoutAvailability_recurrence_rulesInput;

    @Field(() => InstitutionCreateOrConnectWithoutAvailability_recurrence_rulesInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutAvailability_recurrence_rulesInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutAvailability_recurrence_rulesInput;

    @Field(() => InstitutionUpsertWithoutAvailability_recurrence_rulesInput, {nullable:true})
    @Type(() => InstitutionUpsertWithoutAvailability_recurrence_rulesInput)
    upsert?: InstitutionUpsertWithoutAvailability_recurrence_rulesInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionUpdateToOneWithWhereWithoutAvailability_recurrence_rulesInput, {nullable:true})
    @Type(() => InstitutionUpdateToOneWithWhereWithoutAvailability_recurrence_rulesInput)
    update?: InstitutionUpdateToOneWithWhereWithoutAvailability_recurrence_rulesInput;
}
