import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MissionProjectCreateWithoutInstitutionInput } from './mission-project-create-without-institution.input';
import { Type } from 'class-transformer';
import { MissionProjectCreateOrConnectWithoutInstitutionInput } from './mission-project-create-or-connect-without-institution.input';
import { MissionProjectCreateManyInstitutionInputEnvelope } from './mission-project-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MissionProjectWhereUniqueInput } from './mission-project-where-unique.input';

@InputType()
export class MissionProjectCreateNestedManyWithoutInstitutionInput {

    @Field(() => [MissionProjectCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => MissionProjectCreateWithoutInstitutionInput)
    create?: Array<MissionProjectCreateWithoutInstitutionInput>;

    @Field(() => [MissionProjectCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => MissionProjectCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<MissionProjectCreateOrConnectWithoutInstitutionInput>;

    @Field(() => MissionProjectCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => MissionProjectCreateManyInstitutionInputEnvelope)
    createMany?: MissionProjectCreateManyInstitutionInputEnvelope;

    @Field(() => [MissionProjectWhereUniqueInput], {nullable:true})
    @Type(() => MissionProjectWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MissionProjectWhereUniqueInput, 'id'>>;
}
