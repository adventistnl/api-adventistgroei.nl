import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutAvailabilitiesInput } from './institution-create-without-availabilities.input';

@InputType()
export class InstitutionCreateOrConnectWithoutAvailabilitiesInput {

    @Field(() => InstitutionWhereUniqueInput, {nullable:false})
    @Type(() => InstitutionWhereUniqueInput)
    where!: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionCreateWithoutAvailabilitiesInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutAvailabilitiesInput)
    create!: InstitutionCreateWithoutAvailabilitiesInput;
}
