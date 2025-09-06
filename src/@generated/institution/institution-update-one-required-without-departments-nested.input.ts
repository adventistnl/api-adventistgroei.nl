import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutDepartmentsInput } from './institution-create-without-departments.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutDepartmentsInput } from './institution-create-or-connect-without-departments.input';
import { InstitutionUpsertWithoutDepartmentsInput } from './institution-upsert-without-departments.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { InstitutionUpdateToOneWithWhereWithoutDepartmentsInput } from './institution-update-to-one-with-where-without-departments.input';

@InputType()
export class InstitutionUpdateOneRequiredWithoutDepartmentsNestedInput {

    @Field(() => InstitutionCreateWithoutDepartmentsInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutDepartmentsInput)
    create?: InstitutionCreateWithoutDepartmentsInput;

    @Field(() => InstitutionCreateOrConnectWithoutDepartmentsInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutDepartmentsInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutDepartmentsInput;

    @Field(() => InstitutionUpsertWithoutDepartmentsInput, {nullable:true})
    @Type(() => InstitutionUpsertWithoutDepartmentsInput)
    upsert?: InstitutionUpsertWithoutDepartmentsInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionUpdateToOneWithWhereWithoutDepartmentsInput, {nullable:true})
    @Type(() => InstitutionUpdateToOneWithWhereWithoutDepartmentsInput)
    update?: InstitutionUpdateToOneWithWhereWithoutDepartmentsInput;
}
