import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutAssignmentsInput } from './institution-create-without-assignments.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutAssignmentsInput } from './institution-create-or-connect-without-assignments.input';
import { InstitutionUpsertWithoutAssignmentsInput } from './institution-upsert-without-assignments.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { InstitutionUpdateToOneWithWhereWithoutAssignmentsInput } from './institution-update-to-one-with-where-without-assignments.input';

@InputType()
export class InstitutionUpdateOneRequiredWithoutAssignmentsNestedInput {

    @Field(() => InstitutionCreateWithoutAssignmentsInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutAssignmentsInput)
    create?: InstitutionCreateWithoutAssignmentsInput;

    @Field(() => InstitutionCreateOrConnectWithoutAssignmentsInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutAssignmentsInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutAssignmentsInput;

    @Field(() => InstitutionUpsertWithoutAssignmentsInput, {nullable:true})
    @Type(() => InstitutionUpsertWithoutAssignmentsInput)
    upsert?: InstitutionUpsertWithoutAssignmentsInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionUpdateToOneWithWhereWithoutAssignmentsInput, {nullable:true})
    @Type(() => InstitutionUpdateToOneWithWhereWithoutAssignmentsInput)
    update?: InstitutionUpdateToOneWithWhereWithoutAssignmentsInput;
}
