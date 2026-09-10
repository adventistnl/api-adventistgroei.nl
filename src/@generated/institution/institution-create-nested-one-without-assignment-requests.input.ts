import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutAssignment_requestsInput } from './institution-create-without-assignment-requests.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutAssignment_requestsInput } from './institution-create-or-connect-without-assignment-requests.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';

@InputType()
export class InstitutionCreateNestedOneWithoutAssignment_requestsInput {

    @Field(() => InstitutionCreateWithoutAssignment_requestsInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutAssignment_requestsInput)
    create?: InstitutionCreateWithoutAssignment_requestsInput;

    @Field(() => InstitutionCreateOrConnectWithoutAssignment_requestsInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutAssignment_requestsInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutAssignment_requestsInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;
}
