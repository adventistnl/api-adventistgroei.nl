import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutAvailabilitiesInput } from './institution-create-without-availabilities.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutAvailabilitiesInput } from './institution-create-or-connect-without-availabilities.input';
import { InstitutionUpsertWithoutAvailabilitiesInput } from './institution-upsert-without-availabilities.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { InstitutionUpdateToOneWithWhereWithoutAvailabilitiesInput } from './institution-update-to-one-with-where-without-availabilities.input';

@InputType()
export class InstitutionUpdateOneRequiredWithoutAvailabilitiesNestedInput {

    @Field(() => InstitutionCreateWithoutAvailabilitiesInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutAvailabilitiesInput)
    create?: InstitutionCreateWithoutAvailabilitiesInput;

    @Field(() => InstitutionCreateOrConnectWithoutAvailabilitiesInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutAvailabilitiesInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutAvailabilitiesInput;

    @Field(() => InstitutionUpsertWithoutAvailabilitiesInput, {nullable:true})
    @Type(() => InstitutionUpsertWithoutAvailabilitiesInput)
    upsert?: InstitutionUpsertWithoutAvailabilitiesInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionUpdateToOneWithWhereWithoutAvailabilitiesInput, {nullable:true})
    @Type(() => InstitutionUpdateToOneWithWhereWithoutAvailabilitiesInput)
    update?: InstitutionUpdateToOneWithWhereWithoutAvailabilitiesInput;
}
