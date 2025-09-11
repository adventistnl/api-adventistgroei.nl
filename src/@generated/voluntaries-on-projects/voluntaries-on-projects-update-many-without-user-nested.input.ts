import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VoluntariesOnProjectsCreateWithoutUserInput } from './voluntaries-on-projects-create-without-user.input';
import { Type } from 'class-transformer';
import { VoluntariesOnProjectsCreateOrConnectWithoutUserInput } from './voluntaries-on-projects-create-or-connect-without-user.input';
import { VoluntariesOnProjectsUpsertWithWhereUniqueWithoutUserInput } from './voluntaries-on-projects-upsert-with-where-unique-without-user.input';
import { VoluntariesOnProjectsCreateManyUserInputEnvelope } from './voluntaries-on-projects-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VoluntariesOnProjectsWhereUniqueInput } from './voluntaries-on-projects-where-unique.input';
import { VoluntariesOnProjectsUpdateWithWhereUniqueWithoutUserInput } from './voluntaries-on-projects-update-with-where-unique-without-user.input';
import { VoluntariesOnProjectsUpdateManyWithWhereWithoutUserInput } from './voluntaries-on-projects-update-many-with-where-without-user.input';
import { VoluntariesOnProjectsScalarWhereInput } from './voluntaries-on-projects-scalar-where.input';

@InputType()
export class VoluntariesOnProjectsUpdateManyWithoutUserNestedInput {

    @Field(() => [VoluntariesOnProjectsCreateWithoutUserInput], {nullable:true})
    @Type(() => VoluntariesOnProjectsCreateWithoutUserInput)
    create?: Array<VoluntariesOnProjectsCreateWithoutUserInput>;

    @Field(() => [VoluntariesOnProjectsCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => VoluntariesOnProjectsCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<VoluntariesOnProjectsCreateOrConnectWithoutUserInput>;

    @Field(() => [VoluntariesOnProjectsUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => VoluntariesOnProjectsUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<VoluntariesOnProjectsUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => VoluntariesOnProjectsCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => VoluntariesOnProjectsCreateManyUserInputEnvelope)
    createMany?: VoluntariesOnProjectsCreateManyUserInputEnvelope;

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

    @Field(() => [VoluntariesOnProjectsUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => VoluntariesOnProjectsUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<VoluntariesOnProjectsUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [VoluntariesOnProjectsUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => VoluntariesOnProjectsUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<VoluntariesOnProjectsUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [VoluntariesOnProjectsScalarWhereInput], {nullable:true})
    @Type(() => VoluntariesOnProjectsScalarWhereInput)
    deleteMany?: Array<VoluntariesOnProjectsScalarWhereInput>;
}
