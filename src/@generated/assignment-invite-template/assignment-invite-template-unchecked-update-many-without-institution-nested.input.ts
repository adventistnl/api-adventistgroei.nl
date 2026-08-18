import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentInviteTemplateCreateWithoutInstitutionInput } from './assignment-invite-template-create-without-institution.input';
import { Type } from 'class-transformer';
import { AssignmentInviteTemplateCreateOrConnectWithoutInstitutionInput } from './assignment-invite-template-create-or-connect-without-institution.input';
import { AssignmentInviteTemplateUpsertWithWhereUniqueWithoutInstitutionInput } from './assignment-invite-template-upsert-with-where-unique-without-institution.input';
import { AssignmentInviteTemplateCreateManyInstitutionInputEnvelope } from './assignment-invite-template-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AssignmentInviteTemplateWhereUniqueInput } from './assignment-invite-template-where-unique.input';
import { AssignmentInviteTemplateUpdateWithWhereUniqueWithoutInstitutionInput } from './assignment-invite-template-update-with-where-unique-without-institution.input';
import { AssignmentInviteTemplateUpdateManyWithWhereWithoutInstitutionInput } from './assignment-invite-template-update-many-with-where-without-institution.input';
import { AssignmentInviteTemplateScalarWhereInput } from './assignment-invite-template-scalar-where.input';

@InputType()
export class AssignmentInviteTemplateUncheckedUpdateManyWithoutInstitutionNestedInput {

    @Field(() => [AssignmentInviteTemplateCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => AssignmentInviteTemplateCreateWithoutInstitutionInput)
    create?: Array<AssignmentInviteTemplateCreateWithoutInstitutionInput>;

    @Field(() => [AssignmentInviteTemplateCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => AssignmentInviteTemplateCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<AssignmentInviteTemplateCreateOrConnectWithoutInstitutionInput>;

    @Field(() => [AssignmentInviteTemplateUpsertWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => AssignmentInviteTemplateUpsertWithWhereUniqueWithoutInstitutionInput)
    upsert?: Array<AssignmentInviteTemplateUpsertWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => AssignmentInviteTemplateCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => AssignmentInviteTemplateCreateManyInstitutionInputEnvelope)
    createMany?: AssignmentInviteTemplateCreateManyInstitutionInputEnvelope;

    @Field(() => [AssignmentInviteTemplateWhereUniqueInput], {nullable:true})
    @Type(() => AssignmentInviteTemplateWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AssignmentInviteTemplateWhereUniqueInput, 'id'>>;

    @Field(() => [AssignmentInviteTemplateWhereUniqueInput], {nullable:true})
    @Type(() => AssignmentInviteTemplateWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AssignmentInviteTemplateWhereUniqueInput, 'id'>>;

    @Field(() => [AssignmentInviteTemplateWhereUniqueInput], {nullable:true})
    @Type(() => AssignmentInviteTemplateWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AssignmentInviteTemplateWhereUniqueInput, 'id'>>;

    @Field(() => [AssignmentInviteTemplateWhereUniqueInput], {nullable:true})
    @Type(() => AssignmentInviteTemplateWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AssignmentInviteTemplateWhereUniqueInput, 'id'>>;

    @Field(() => [AssignmentInviteTemplateUpdateWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => AssignmentInviteTemplateUpdateWithWhereUniqueWithoutInstitutionInput)
    update?: Array<AssignmentInviteTemplateUpdateWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => [AssignmentInviteTemplateUpdateManyWithWhereWithoutInstitutionInput], {nullable:true})
    @Type(() => AssignmentInviteTemplateUpdateManyWithWhereWithoutInstitutionInput)
    updateMany?: Array<AssignmentInviteTemplateUpdateManyWithWhereWithoutInstitutionInput>;

    @Field(() => [AssignmentInviteTemplateScalarWhereInput], {nullable:true})
    @Type(() => AssignmentInviteTemplateScalarWhereInput)
    deleteMany?: Array<AssignmentInviteTemplateScalarWhereInput>;
}
