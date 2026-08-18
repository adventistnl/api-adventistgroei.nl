import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutAssignmentsInput } from './institution-create-without-assignments.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutAssignmentsInput } from './institution-create-or-connect-without-assignments.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';

@InputType()
export class InstitutionCreateNestedOneWithoutAssignmentsInput {

    @Field(() => InstitutionCreateWithoutAssignmentsInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutAssignmentsInput)
    create?: InstitutionCreateWithoutAssignmentsInput;

    @Field(() => InstitutionCreateOrConnectWithoutAssignmentsInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutAssignmentsInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutAssignmentsInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;
}
