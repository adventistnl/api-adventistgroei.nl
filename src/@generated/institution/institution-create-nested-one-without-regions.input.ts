import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutRegionsInput } from './institution-create-without-regions.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutRegionsInput } from './institution-create-or-connect-without-regions.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';

@InputType()
export class InstitutionCreateNestedOneWithoutRegionsInput {

    @Field(() => InstitutionCreateWithoutRegionsInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutRegionsInput)
    create?: InstitutionCreateWithoutRegionsInput;

    @Field(() => InstitutionCreateOrConnectWithoutRegionsInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutRegionsInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutRegionsInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;
}
