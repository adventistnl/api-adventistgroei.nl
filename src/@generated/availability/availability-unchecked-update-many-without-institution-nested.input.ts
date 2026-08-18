import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityCreateWithoutInstitutionInput } from './availability-create-without-institution.input';
import { Type } from 'class-transformer';
import { AvailabilityCreateOrConnectWithoutInstitutionInput } from './availability-create-or-connect-without-institution.input';
import { AvailabilityUpsertWithWhereUniqueWithoutInstitutionInput } from './availability-upsert-with-where-unique-without-institution.input';
import { AvailabilityCreateManyInstitutionInputEnvelope } from './availability-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AvailabilityWhereUniqueInput } from './availability-where-unique.input';
import { AvailabilityUpdateWithWhereUniqueWithoutInstitutionInput } from './availability-update-with-where-unique-without-institution.input';
import { AvailabilityUpdateManyWithWhereWithoutInstitutionInput } from './availability-update-many-with-where-without-institution.input';
import { AvailabilityScalarWhereInput } from './availability-scalar-where.input';

@InputType()
export class AvailabilityUncheckedUpdateManyWithoutInstitutionNestedInput {

    @Field(() => [AvailabilityCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => AvailabilityCreateWithoutInstitutionInput)
    create?: Array<AvailabilityCreateWithoutInstitutionInput>;

    @Field(() => [AvailabilityCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => AvailabilityCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<AvailabilityCreateOrConnectWithoutInstitutionInput>;

    @Field(() => [AvailabilityUpsertWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => AvailabilityUpsertWithWhereUniqueWithoutInstitutionInput)
    upsert?: Array<AvailabilityUpsertWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => AvailabilityCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => AvailabilityCreateManyInstitutionInputEnvelope)
    createMany?: AvailabilityCreateManyInstitutionInputEnvelope;

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

    @Field(() => [AvailabilityUpdateWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => AvailabilityUpdateWithWhereUniqueWithoutInstitutionInput)
    update?: Array<AvailabilityUpdateWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => [AvailabilityUpdateManyWithWhereWithoutInstitutionInput], {nullable:true})
    @Type(() => AvailabilityUpdateManyWithWhereWithoutInstitutionInput)
    updateMany?: Array<AvailabilityUpdateManyWithWhereWithoutInstitutionInput>;

    @Field(() => [AvailabilityScalarWhereInput], {nullable:true})
    @Type(() => AvailabilityScalarWhereInput)
    deleteMany?: Array<AvailabilityScalarWhereInput>;
}
