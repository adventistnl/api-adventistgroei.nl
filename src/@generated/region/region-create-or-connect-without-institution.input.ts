import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RegionWhereUniqueInput } from './region-where-unique.input';
import { Type } from 'class-transformer';
import { RegionCreateWithoutInstitutionInput } from './region-create-without-institution.input';

@InputType()
export class RegionCreateOrConnectWithoutInstitutionInput {

    @Field(() => RegionWhereUniqueInput, {nullable:false})
    @Type(() => RegionWhereUniqueInput)
    where!: Prisma.AtLeast<RegionWhereUniqueInput, 'id'>;

    @Field(() => RegionCreateWithoutInstitutionInput, {nullable:false})
    @Type(() => RegionCreateWithoutInstitutionInput)
    create!: RegionCreateWithoutInstitutionInput;
}
