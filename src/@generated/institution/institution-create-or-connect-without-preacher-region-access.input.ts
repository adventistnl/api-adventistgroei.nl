import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutPreacher_region_accessInput } from './institution-create-without-preacher-region-access.input';

@InputType()
export class InstitutionCreateOrConnectWithoutPreacher_region_accessInput {

    @Field(() => InstitutionWhereUniqueInput, {nullable:false})
    @Type(() => InstitutionWhereUniqueInput)
    where!: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionCreateWithoutPreacher_region_accessInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutPreacher_region_accessInput)
    create!: InstitutionCreateWithoutPreacher_region_accessInput;
}
