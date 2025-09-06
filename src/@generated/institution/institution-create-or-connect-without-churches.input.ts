import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutChurchesInput } from './institution-create-without-churches.input';

@InputType()
export class InstitutionCreateOrConnectWithoutChurchesInput {

    @Field(() => InstitutionWhereUniqueInput, {nullable:false})
    @Type(() => InstitutionWhereUniqueInput)
    where!: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionCreateWithoutChurchesInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutChurchesInput)
    create!: InstitutionCreateWithoutChurchesInput;
}
