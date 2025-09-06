import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutContactInput } from './institution-create-without-contact.input';

@InputType()
export class InstitutionCreateOrConnectWithoutContactInput {

    @Field(() => InstitutionWhereUniqueInput, {nullable:false})
    @Type(() => InstitutionWhereUniqueInput)
    where!: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionCreateWithoutContactInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutContactInput)
    create!: InstitutionCreateWithoutContactInput;
}
