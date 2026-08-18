import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutPreacher_region_accessInput } from './institution-create-without-preacher-region-access.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutPreacher_region_accessInput } from './institution-create-or-connect-without-preacher-region-access.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';

@InputType()
export class InstitutionCreateNestedOneWithoutPreacher_region_accessInput {

    @Field(() => InstitutionCreateWithoutPreacher_region_accessInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutPreacher_region_accessInput)
    create?: InstitutionCreateWithoutPreacher_region_accessInput;

    @Field(() => InstitutionCreateOrConnectWithoutPreacher_region_accessInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutPreacher_region_accessInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutPreacher_region_accessInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;
}
