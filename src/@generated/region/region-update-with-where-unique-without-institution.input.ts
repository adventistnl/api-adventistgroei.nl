import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RegionWhereUniqueInput } from './region-where-unique.input';
import { Type } from 'class-transformer';
import { RegionUpdateWithoutInstitutionInput } from './region-update-without-institution.input';

@InputType()
export class RegionUpdateWithWhereUniqueWithoutInstitutionInput {

    @Field(() => RegionWhereUniqueInput, {nullable:false})
    @Type(() => RegionWhereUniqueInput)
    where!: Prisma.AtLeast<RegionWhereUniqueInput, 'id'>;

    @Field(() => RegionUpdateWithoutInstitutionInput, {nullable:false})
    @Type(() => RegionUpdateWithoutInstitutionInput)
    data!: RegionUpdateWithoutInstitutionInput;
}
