import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutAvailability_recurrence_rulesInput } from './institution-create-without-availability-recurrence-rules.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutAvailability_recurrence_rulesInput } from './institution-create-or-connect-without-availability-recurrence-rules.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';

@InputType()
export class InstitutionCreateNestedOneWithoutAvailability_recurrence_rulesInput {

    @Field(() => InstitutionCreateWithoutAvailability_recurrence_rulesInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutAvailability_recurrence_rulesInput)
    create?: InstitutionCreateWithoutAvailability_recurrence_rulesInput;

    @Field(() => InstitutionCreateOrConnectWithoutAvailability_recurrence_rulesInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutAvailability_recurrence_rulesInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutAvailability_recurrence_rulesInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;
}
