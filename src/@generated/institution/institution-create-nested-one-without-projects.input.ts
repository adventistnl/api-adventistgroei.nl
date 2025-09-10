import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutProjectsInput } from './institution-create-without-projects.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutProjectsInput } from './institution-create-or-connect-without-projects.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';

@InputType()
export class InstitutionCreateNestedOneWithoutProjectsInput {

    @Field(() => InstitutionCreateWithoutProjectsInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutProjectsInput)
    create?: InstitutionCreateWithoutProjectsInput;

    @Field(() => InstitutionCreateOrConnectWithoutProjectsInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutProjectsInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutProjectsInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;
}
