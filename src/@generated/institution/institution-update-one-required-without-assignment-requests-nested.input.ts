import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutAssignment_requestsInput } from './institution-create-without-assignment-requests.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutAssignment_requestsInput } from './institution-create-or-connect-without-assignment-requests.input';
import { InstitutionUpsertWithoutAssignment_requestsInput } from './institution-upsert-without-assignment-requests.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { InstitutionUpdateToOneWithWhereWithoutAssignment_requestsInput } from './institution-update-to-one-with-where-without-assignment-requests.input';

@InputType()
export class InstitutionUpdateOneRequiredWithoutAssignment_requestsNestedInput {

    @Field(() => InstitutionCreateWithoutAssignment_requestsInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutAssignment_requestsInput)
    create?: InstitutionCreateWithoutAssignment_requestsInput;

    @Field(() => InstitutionCreateOrConnectWithoutAssignment_requestsInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutAssignment_requestsInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutAssignment_requestsInput;

    @Field(() => InstitutionUpsertWithoutAssignment_requestsInput, {nullable:true})
    @Type(() => InstitutionUpsertWithoutAssignment_requestsInput)
    upsert?: InstitutionUpsertWithoutAssignment_requestsInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionUpdateToOneWithWhereWithoutAssignment_requestsInput, {nullable:true})
    @Type(() => InstitutionUpdateToOneWithWhereWithoutAssignment_requestsInput)
    update?: InstitutionUpdateToOneWithWhereWithoutAssignment_requestsInput;
}
