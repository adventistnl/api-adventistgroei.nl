import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutPositionsInput } from './institution-create-without-positions.input';

@InputType()
export class InstitutionCreateOrConnectWithoutPositionsInput {

    @Field(() => InstitutionWhereUniqueInput, {nullable:false})
    @Type(() => InstitutionWhereUniqueInput)
    where!: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionCreateWithoutPositionsInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutPositionsInput)
    create!: InstitutionCreateWithoutPositionsInput;
}
