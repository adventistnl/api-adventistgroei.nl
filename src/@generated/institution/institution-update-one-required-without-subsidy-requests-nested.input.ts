import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutSubsidy_requestsInput } from './institution-create-without-subsidy-requests.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutSubsidy_requestsInput } from './institution-create-or-connect-without-subsidy-requests.input';
import { InstitutionUpsertWithoutSubsidy_requestsInput } from './institution-upsert-without-subsidy-requests.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { InstitutionUpdateToOneWithWhereWithoutSubsidy_requestsInput } from './institution-update-to-one-with-where-without-subsidy-requests.input';

@InputType()
export class InstitutionUpdateOneRequiredWithoutSubsidy_requestsNestedInput {

    @Field(() => InstitutionCreateWithoutSubsidy_requestsInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutSubsidy_requestsInput)
    create?: InstitutionCreateWithoutSubsidy_requestsInput;

    @Field(() => InstitutionCreateOrConnectWithoutSubsidy_requestsInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutSubsidy_requestsInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutSubsidy_requestsInput;

    @Field(() => InstitutionUpsertWithoutSubsidy_requestsInput, {nullable:true})
    @Type(() => InstitutionUpsertWithoutSubsidy_requestsInput)
    upsert?: InstitutionUpsertWithoutSubsidy_requestsInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionUpdateToOneWithWhereWithoutSubsidy_requestsInput, {nullable:true})
    @Type(() => InstitutionUpdateToOneWithWhereWithoutSubsidy_requestsInput)
    update?: InstitutionUpdateToOneWithWhereWithoutSubsidy_requestsInput;
}
