import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VoluntariesOnProjectsCreateWithoutProjectInput } from './voluntaries-on-projects-create-without-project.input';
import { Type } from 'class-transformer';
import { VoluntariesOnProjectsCreateOrConnectWithoutProjectInput } from './voluntaries-on-projects-create-or-connect-without-project.input';
import { VoluntariesOnProjectsUpsertWithWhereUniqueWithoutProjectInput } from './voluntaries-on-projects-upsert-with-where-unique-without-project.input';
import { VoluntariesOnProjectsCreateManyProjectInputEnvelope } from './voluntaries-on-projects-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VoluntariesOnProjectsWhereUniqueInput } from './voluntaries-on-projects-where-unique.input';
import { VoluntariesOnProjectsUpdateWithWhereUniqueWithoutProjectInput } from './voluntaries-on-projects-update-with-where-unique-without-project.input';
import { VoluntariesOnProjectsUpdateManyWithWhereWithoutProjectInput } from './voluntaries-on-projects-update-many-with-where-without-project.input';
import { VoluntariesOnProjectsScalarWhereInput } from './voluntaries-on-projects-scalar-where.input';

@InputType()
export class VoluntariesOnProjectsUpdateManyWithoutProjectNestedInput {

    @Field(() => [VoluntariesOnProjectsCreateWithoutProjectInput], {nullable:true})
    @Type(() => VoluntariesOnProjectsCreateWithoutProjectInput)
    create?: Array<VoluntariesOnProjectsCreateWithoutProjectInput>;

    @Field(() => [VoluntariesOnProjectsCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => VoluntariesOnProjectsCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<VoluntariesOnProjectsCreateOrConnectWithoutProjectInput>;

    @Field(() => [VoluntariesOnProjectsUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => VoluntariesOnProjectsUpsertWithWhereUniqueWithoutProjectInput)
    upsert?: Array<VoluntariesOnProjectsUpsertWithWhereUniqueWithoutProjectInput>;

    @Field(() => VoluntariesOnProjectsCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => VoluntariesOnProjectsCreateManyProjectInputEnvelope)
    createMany?: VoluntariesOnProjectsCreateManyProjectInputEnvelope;

    @Field(() => [VoluntariesOnProjectsWhereUniqueInput], {nullable:true})
    @Type(() => VoluntariesOnProjectsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<VoluntariesOnProjectsWhereUniqueInput, 'user_id_project_id'>>;

    @Field(() => [VoluntariesOnProjectsWhereUniqueInput], {nullable:true})
    @Type(() => VoluntariesOnProjectsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<VoluntariesOnProjectsWhereUniqueInput, 'user_id_project_id'>>;

    @Field(() => [VoluntariesOnProjectsWhereUniqueInput], {nullable:true})
    @Type(() => VoluntariesOnProjectsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<VoluntariesOnProjectsWhereUniqueInput, 'user_id_project_id'>>;

    @Field(() => [VoluntariesOnProjectsWhereUniqueInput], {nullable:true})
    @Type(() => VoluntariesOnProjectsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VoluntariesOnProjectsWhereUniqueInput, 'user_id_project_id'>>;

    @Field(() => [VoluntariesOnProjectsUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => VoluntariesOnProjectsUpdateWithWhereUniqueWithoutProjectInput)
    update?: Array<VoluntariesOnProjectsUpdateWithWhereUniqueWithoutProjectInput>;

    @Field(() => [VoluntariesOnProjectsUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    @Type(() => VoluntariesOnProjectsUpdateManyWithWhereWithoutProjectInput)
    updateMany?: Array<VoluntariesOnProjectsUpdateManyWithWhereWithoutProjectInput>;

    @Field(() => [VoluntariesOnProjectsScalarWhereInput], {nullable:true})
    @Type(() => VoluntariesOnProjectsScalarWhereInput)
    deleteMany?: Array<VoluntariesOnProjectsScalarWhereInput>;
}
