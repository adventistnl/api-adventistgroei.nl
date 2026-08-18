import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutAvailabilitiesInput } from './institution-create-without-availabilities.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutAvailabilitiesInput } from './institution-create-or-connect-without-availabilities.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';

@InputType()
export class InstitutionCreateNestedOneWithoutAvailabilitiesInput {

    @Field(() => InstitutionCreateWithoutAvailabilitiesInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutAvailabilitiesInput)
    create?: InstitutionCreateWithoutAvailabilitiesInput;

    @Field(() => InstitutionCreateOrConnectWithoutAvailabilitiesInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutAvailabilitiesInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutAvailabilitiesInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;
}
