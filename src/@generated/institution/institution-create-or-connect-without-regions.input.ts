import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutRegionsInput } from './institution-create-without-regions.input';

@InputType()
export class InstitutionCreateOrConnectWithoutRegionsInput {

    @Field(() => InstitutionWhereUniqueInput, {nullable:false})
    @Type(() => InstitutionWhereUniqueInput)
    where!: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionCreateWithoutRegionsInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutRegionsInput)
    create!: InstitutionCreateWithoutRegionsInput;
}
