import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VoluntariesOnProjectsCreateWithoutProjectInput } from './voluntaries-on-projects-create-without-project.input';
import { Type } from 'class-transformer';
import { VoluntariesOnProjectsCreateOrConnectWithoutProjectInput } from './voluntaries-on-projects-create-or-connect-without-project.input';
import { VoluntariesOnProjectsCreateManyProjectInputEnvelope } from './voluntaries-on-projects-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VoluntariesOnProjectsWhereUniqueInput } from './voluntaries-on-projects-where-unique.input';

@InputType()
export class VoluntariesOnProjectsCreateNestedManyWithoutProjectInput {

    @Field(() => [VoluntariesOnProjectsCreateWithoutProjectInput], {nullable:true})
    @Type(() => VoluntariesOnProjectsCreateWithoutProjectInput)
    create?: Array<VoluntariesOnProjectsCreateWithoutProjectInput>;

    @Field(() => [VoluntariesOnProjectsCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => VoluntariesOnProjectsCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<VoluntariesOnProjectsCreateOrConnectWithoutProjectInput>;

    @Field(() => VoluntariesOnProjectsCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => VoluntariesOnProjectsCreateManyProjectInputEnvelope)
    createMany?: VoluntariesOnProjectsCreateManyProjectInputEnvelope;

    @Field(() => [VoluntariesOnProjectsWhereUniqueInput], {nullable:true})
    @Type(() => VoluntariesOnProjectsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VoluntariesOnProjectsWhereUniqueInput, 'user_id_project_id'>>;
}
