import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutSubsidy_requestsInput } from './institution-create-without-subsidy-requests.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutSubsidy_requestsInput } from './institution-create-or-connect-without-subsidy-requests.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';

@InputType()
export class InstitutionCreateNestedOneWithoutSubsidy_requestsInput {

    @Field(() => InstitutionCreateWithoutSubsidy_requestsInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutSubsidy_requestsInput)
    create?: InstitutionCreateWithoutSubsidy_requestsInput;

    @Field(() => InstitutionCreateOrConnectWithoutSubsidy_requestsInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutSubsidy_requestsInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutSubsidy_requestsInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;
}
