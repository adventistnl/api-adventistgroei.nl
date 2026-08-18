import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityCreateWithoutInstitutionInput } from './availability-create-without-institution.input';
import { Type } from 'class-transformer';
import { AvailabilityCreateOrConnectWithoutInstitutionInput } from './availability-create-or-connect-without-institution.input';
import { AvailabilityCreateManyInstitutionInputEnvelope } from './availability-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AvailabilityWhereUniqueInput } from './availability-where-unique.input';

@InputType()
export class AvailabilityCreateNestedManyWithoutInstitutionInput {

    @Field(() => [AvailabilityCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => AvailabilityCreateWithoutInstitutionInput)
    create?: Array<AvailabilityCreateWithoutInstitutionInput>;

    @Field(() => [AvailabilityCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => AvailabilityCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<AvailabilityCreateOrConnectWithoutInstitutionInput>;

    @Field(() => AvailabilityCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => AvailabilityCreateManyInstitutionInputEnvelope)
    createMany?: AvailabilityCreateManyInstitutionInputEnvelope;

    @Field(() => [AvailabilityWhereUniqueInput], {nullable:true})
    @Type(() => AvailabilityWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AvailabilityWhereUniqueInput, 'id' | 'user_id_date'>>;
}
