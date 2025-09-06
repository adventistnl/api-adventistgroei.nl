import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutSubsidy_requestsInput } from './institution-create-without-subsidy-requests.input';

@InputType()
export class InstitutionCreateOrConnectWithoutSubsidy_requestsInput {

    @Field(() => InstitutionWhereUniqueInput, {nullable:false})
    @Type(() => InstitutionWhereUniqueInput)
    where!: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionCreateWithoutSubsidy_requestsInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutSubsidy_requestsInput)
    create!: InstitutionCreateWithoutSubsidy_requestsInput;
}
