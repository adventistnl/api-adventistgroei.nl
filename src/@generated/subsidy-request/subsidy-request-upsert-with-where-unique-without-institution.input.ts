import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyRequestUpdateWithoutInstitutionInput } from './subsidy-request-update-without-institution.input';
import { SubsidyRequestCreateWithoutInstitutionInput } from './subsidy-request-create-without-institution.input';

@InputType()
export class SubsidyRequestUpsertWithWhereUniqueWithoutInstitutionInput {

    @Field(() => SubsidyRequestWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyRequestWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>;

    @Field(() => SubsidyRequestUpdateWithoutInstitutionInput, {nullable:false})
    @Type(() => SubsidyRequestUpdateWithoutInstitutionInput)
    update!: SubsidyRequestUpdateWithoutInstitutionInput;

    @Field(() => SubsidyRequestCreateWithoutInstitutionInput, {nullable:false})
    @Type(() => SubsidyRequestCreateWithoutInstitutionInput)
    create!: SubsidyRequestCreateWithoutInstitutionInput;
}
