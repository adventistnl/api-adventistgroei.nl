import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutProjectsInput } from './institution-create-without-projects.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutProjectsInput } from './institution-create-or-connect-without-projects.input';
import { InstitutionUpsertWithoutProjectsInput } from './institution-upsert-without-projects.input';
import { InstitutionWhereInput } from './institution-where.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { InstitutionUpdateToOneWithWhereWithoutProjectsInput } from './institution-update-to-one-with-where-without-projects.input';

@InputType()
export class InstitutionUpdateOneWithoutProjectsNestedInput {

    @Field(() => InstitutionCreateWithoutProjectsInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutProjectsInput)
    create?: InstitutionCreateWithoutProjectsInput;

    @Field(() => InstitutionCreateOrConnectWithoutProjectsInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutProjectsInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutProjectsInput;

    @Field(() => InstitutionUpsertWithoutProjectsInput, {nullable:true})
    @Type(() => InstitutionUpsertWithoutProjectsInput)
    upsert?: InstitutionUpsertWithoutProjectsInput;

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    disconnect?: InstitutionWhereInput;

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    delete?: InstitutionWhereInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionUpdateToOneWithWhereWithoutProjectsInput, {nullable:true})
    @Type(() => InstitutionUpdateToOneWithWhereWithoutProjectsInput)
    update?: InstitutionUpdateToOneWithWhereWithoutProjectsInput;
}
