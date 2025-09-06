import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestCreateWithoutInstitutionInput } from './subsidy-request-create-without-institution.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateOrConnectWithoutInstitutionInput } from './subsidy-request-create-or-connect-without-institution.input';
import { SubsidyRequestCreateManyInstitutionInputEnvelope } from './subsidy-request-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';

@InputType()
export class SubsidyRequestUncheckedCreateNestedManyWithoutInstitutionInput {

    @Field(() => [SubsidyRequestCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => SubsidyRequestCreateWithoutInstitutionInput)
    create?: Array<SubsidyRequestCreateWithoutInstitutionInput>;

    @Field(() => [SubsidyRequestCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => SubsidyRequestCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<SubsidyRequestCreateOrConnectWithoutInstitutionInput>;

    @Field(() => SubsidyRequestCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => SubsidyRequestCreateManyInstitutionInputEnvelope)
    createMany?: SubsidyRequestCreateManyInstitutionInputEnvelope;

    @Field(() => [SubsidyRequestWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>>;
}
