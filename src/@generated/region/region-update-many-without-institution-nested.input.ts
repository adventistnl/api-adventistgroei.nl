import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionCreateWithoutInstitutionInput } from './region-create-without-institution.input';
import { Type } from 'class-transformer';
import { RegionCreateOrConnectWithoutInstitutionInput } from './region-create-or-connect-without-institution.input';
import { RegionUpsertWithWhereUniqueWithoutInstitutionInput } from './region-upsert-with-where-unique-without-institution.input';
import { RegionCreateManyInstitutionInputEnvelope } from './region-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RegionWhereUniqueInput } from './region-where-unique.input';
import { RegionUpdateWithWhereUniqueWithoutInstitutionInput } from './region-update-with-where-unique-without-institution.input';
import { RegionUpdateManyWithWhereWithoutInstitutionInput } from './region-update-many-with-where-without-institution.input';
import { RegionScalarWhereInput } from './region-scalar-where.input';

@InputType()
export class RegionUpdateManyWithoutInstitutionNestedInput {

    @Field(() => [RegionCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => RegionCreateWithoutInstitutionInput)
    create?: Array<RegionCreateWithoutInstitutionInput>;

    @Field(() => [RegionCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => RegionCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<RegionCreateOrConnectWithoutInstitutionInput>;

    @Field(() => [RegionUpsertWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => RegionUpsertWithWhereUniqueWithoutInstitutionInput)
    upsert?: Array<RegionUpsertWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => RegionCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => RegionCreateManyInstitutionInputEnvelope)
    createMany?: RegionCreateManyInstitutionInputEnvelope;

    @Field(() => [RegionWhereUniqueInput], {nullable:true})
    @Type(() => RegionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RegionWhereUniqueInput, 'id'>>;

    @Field(() => [RegionWhereUniqueInput], {nullable:true})
    @Type(() => RegionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RegionWhereUniqueInput, 'id'>>;

    @Field(() => [RegionWhereUniqueInput], {nullable:true})
    @Type(() => RegionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RegionWhereUniqueInput, 'id'>>;

    @Field(() => [RegionWhereUniqueInput], {nullable:true})
    @Type(() => RegionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RegionWhereUniqueInput, 'id'>>;

    @Field(() => [RegionUpdateWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => RegionUpdateWithWhereUniqueWithoutInstitutionInput)
    update?: Array<RegionUpdateWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => [RegionUpdateManyWithWhereWithoutInstitutionInput], {nullable:true})
    @Type(() => RegionUpdateManyWithWhereWithoutInstitutionInput)
    updateMany?: Array<RegionUpdateManyWithWhereWithoutInstitutionInput>;

    @Field(() => [RegionScalarWhereInput], {nullable:true})
    @Type(() => RegionScalarWhereInput)
    deleteMany?: Array<RegionScalarWhereInput>;
}
