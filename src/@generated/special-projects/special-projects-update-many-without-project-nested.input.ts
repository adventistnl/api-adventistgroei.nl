import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpecialProjectsCreateWithoutProjectInput } from './special-projects-create-without-project.input';
import { Type } from 'class-transformer';
import { SpecialProjectsCreateOrConnectWithoutProjectInput } from './special-projects-create-or-connect-without-project.input';
import { SpecialProjectsUpsertWithWhereUniqueWithoutProjectInput } from './special-projects-upsert-with-where-unique-without-project.input';
import { SpecialProjectsCreateManyProjectInputEnvelope } from './special-projects-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SpecialProjectsWhereUniqueInput } from './special-projects-where-unique.input';
import { SpecialProjectsUpdateWithWhereUniqueWithoutProjectInput } from './special-projects-update-with-where-unique-without-project.input';
import { SpecialProjectsUpdateManyWithWhereWithoutProjectInput } from './special-projects-update-many-with-where-without-project.input';
import { SpecialProjectsScalarWhereInput } from './special-projects-scalar-where.input';

@InputType()
export class SpecialProjectsUpdateManyWithoutProjectNestedInput {

    @Field(() => [SpecialProjectsCreateWithoutProjectInput], {nullable:true})
    @Type(() => SpecialProjectsCreateWithoutProjectInput)
    create?: Array<SpecialProjectsCreateWithoutProjectInput>;

    @Field(() => [SpecialProjectsCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => SpecialProjectsCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<SpecialProjectsCreateOrConnectWithoutProjectInput>;

    @Field(() => [SpecialProjectsUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => SpecialProjectsUpsertWithWhereUniqueWithoutProjectInput)
    upsert?: Array<SpecialProjectsUpsertWithWhereUniqueWithoutProjectInput>;

    @Field(() => SpecialProjectsCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => SpecialProjectsCreateManyProjectInputEnvelope)
    createMany?: SpecialProjectsCreateManyProjectInputEnvelope;

    @Field(() => [SpecialProjectsWhereUniqueInput], {nullable:true})
    @Type(() => SpecialProjectsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SpecialProjectsWhereUniqueInput, 'id'>>;

    @Field(() => [SpecialProjectsWhereUniqueInput], {nullable:true})
    @Type(() => SpecialProjectsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SpecialProjectsWhereUniqueInput, 'id'>>;

    @Field(() => [SpecialProjectsWhereUniqueInput], {nullable:true})
    @Type(() => SpecialProjectsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SpecialProjectsWhereUniqueInput, 'id'>>;

    @Field(() => [SpecialProjectsWhereUniqueInput], {nullable:true})
    @Type(() => SpecialProjectsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SpecialProjectsWhereUniqueInput, 'id'>>;

    @Field(() => [SpecialProjectsUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => SpecialProjectsUpdateWithWhereUniqueWithoutProjectInput)
    update?: Array<SpecialProjectsUpdateWithWhereUniqueWithoutProjectInput>;

    @Field(() => [SpecialProjectsUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    @Type(() => SpecialProjectsUpdateManyWithWhereWithoutProjectInput)
    updateMany?: Array<SpecialProjectsUpdateManyWithWhereWithoutProjectInput>;

    @Field(() => [SpecialProjectsScalarWhereInput], {nullable:true})
    @Type(() => SpecialProjectsScalarWhereInput)
    deleteMany?: Array<SpecialProjectsScalarWhereInput>;
}
