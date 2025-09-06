import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MissionProjectCreateWithoutInstitutionInput } from './mission-project-create-without-institution.input';
import { Type } from 'class-transformer';
import { MissionProjectCreateOrConnectWithoutInstitutionInput } from './mission-project-create-or-connect-without-institution.input';
import { MissionProjectUpsertWithWhereUniqueWithoutInstitutionInput } from './mission-project-upsert-with-where-unique-without-institution.input';
import { MissionProjectCreateManyInstitutionInputEnvelope } from './mission-project-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MissionProjectWhereUniqueInput } from './mission-project-where-unique.input';
import { MissionProjectUpdateWithWhereUniqueWithoutInstitutionInput } from './mission-project-update-with-where-unique-without-institution.input';
import { MissionProjectUpdateManyWithWhereWithoutInstitutionInput } from './mission-project-update-many-with-where-without-institution.input';
import { MissionProjectScalarWhereInput } from './mission-project-scalar-where.input';

@InputType()
export class MissionProjectUpdateManyWithoutInstitutionNestedInput {

    @Field(() => [MissionProjectCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => MissionProjectCreateWithoutInstitutionInput)
    create?: Array<MissionProjectCreateWithoutInstitutionInput>;

    @Field(() => [MissionProjectCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => MissionProjectCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<MissionProjectCreateOrConnectWithoutInstitutionInput>;

    @Field(() => [MissionProjectUpsertWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => MissionProjectUpsertWithWhereUniqueWithoutInstitutionInput)
    upsert?: Array<MissionProjectUpsertWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => MissionProjectCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => MissionProjectCreateManyInstitutionInputEnvelope)
    createMany?: MissionProjectCreateManyInstitutionInputEnvelope;

    @Field(() => [MissionProjectWhereUniqueInput], {nullable:true})
    @Type(() => MissionProjectWhereUniqueInput)
    set?: Array<Prisma.AtLeast<MissionProjectWhereUniqueInput, 'id'>>;

    @Field(() => [MissionProjectWhereUniqueInput], {nullable:true})
    @Type(() => MissionProjectWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<MissionProjectWhereUniqueInput, 'id'>>;

    @Field(() => [MissionProjectWhereUniqueInput], {nullable:true})
    @Type(() => MissionProjectWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<MissionProjectWhereUniqueInput, 'id'>>;

    @Field(() => [MissionProjectWhereUniqueInput], {nullable:true})
    @Type(() => MissionProjectWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MissionProjectWhereUniqueInput, 'id'>>;

    @Field(() => [MissionProjectUpdateWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => MissionProjectUpdateWithWhereUniqueWithoutInstitutionInput)
    update?: Array<MissionProjectUpdateWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => [MissionProjectUpdateManyWithWhereWithoutInstitutionInput], {nullable:true})
    @Type(() => MissionProjectUpdateManyWithWhereWithoutInstitutionInput)
    updateMany?: Array<MissionProjectUpdateManyWithWhereWithoutInstitutionInput>;

    @Field(() => [MissionProjectScalarWhereInput], {nullable:true})
    @Type(() => MissionProjectScalarWhereInput)
    deleteMany?: Array<MissionProjectScalarWhereInput>;
}
