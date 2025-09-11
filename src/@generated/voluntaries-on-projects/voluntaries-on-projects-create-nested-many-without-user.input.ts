import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VoluntariesOnProjectsCreateWithoutUserInput } from './voluntaries-on-projects-create-without-user.input';
import { Type } from 'class-transformer';
import { VoluntariesOnProjectsCreateOrConnectWithoutUserInput } from './voluntaries-on-projects-create-or-connect-without-user.input';
import { VoluntariesOnProjectsCreateManyUserInputEnvelope } from './voluntaries-on-projects-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VoluntariesOnProjectsWhereUniqueInput } from './voluntaries-on-projects-where-unique.input';

@InputType()
export class VoluntariesOnProjectsCreateNestedManyWithoutUserInput {

    @Field(() => [VoluntariesOnProjectsCreateWithoutUserInput], {nullable:true})
    @Type(() => VoluntariesOnProjectsCreateWithoutUserInput)
    create?: Array<VoluntariesOnProjectsCreateWithoutUserInput>;

    @Field(() => [VoluntariesOnProjectsCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => VoluntariesOnProjectsCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<VoluntariesOnProjectsCreateOrConnectWithoutUserInput>;

    @Field(() => VoluntariesOnProjectsCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => VoluntariesOnProjectsCreateManyUserInputEnvelope)
    createMany?: VoluntariesOnProjectsCreateManyUserInputEnvelope;

    @Field(() => [VoluntariesOnProjectsWhereUniqueInput], {nullable:true})
    @Type(() => VoluntariesOnProjectsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VoluntariesOnProjectsWhereUniqueInput, 'user_id_project_id'>>;
}
