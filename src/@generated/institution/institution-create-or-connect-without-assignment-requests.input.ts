import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutAssignment_requestsInput } from './institution-create-without-assignment-requests.input';

@InputType()
export class InstitutionCreateOrConnectWithoutAssignment_requestsInput {

    @Field(() => InstitutionWhereUniqueInput, {nullable:false})
    @Type(() => InstitutionWhereUniqueInput)
    where!: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionCreateWithoutAssignment_requestsInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutAssignment_requestsInput)
    create!: InstitutionCreateWithoutAssignment_requestsInput;
}
