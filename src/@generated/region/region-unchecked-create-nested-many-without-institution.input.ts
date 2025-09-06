import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionCreateWithoutInstitutionInput } from './region-create-without-institution.input';
import { Type } from 'class-transformer';
import { RegionCreateOrConnectWithoutInstitutionInput } from './region-create-or-connect-without-institution.input';
import { RegionCreateManyInstitutionInputEnvelope } from './region-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RegionWhereUniqueInput } from './region-where-unique.input';

@InputType()
export class RegionUncheckedCreateNestedManyWithoutInstitutionInput {

    @Field(() => [RegionCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => RegionCreateWithoutInstitutionInput)
    create?: Array<RegionCreateWithoutInstitutionInput>;

    @Field(() => [RegionCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => RegionCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<RegionCreateOrConnectWithoutInstitutionInput>;

    @Field(() => RegionCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => RegionCreateManyInstitutionInputEnvelope)
    createMany?: RegionCreateManyInstitutionInputEnvelope;

    @Field(() => [RegionWhereUniqueInput], {nullable:true})
    @Type(() => RegionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RegionWhereUniqueInput, 'id'>>;
}
