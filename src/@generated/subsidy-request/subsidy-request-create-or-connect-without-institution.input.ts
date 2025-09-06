import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateWithoutInstitutionInput } from './subsidy-request-create-without-institution.input';

@InputType()
export class SubsidyRequestCreateOrConnectWithoutInstitutionInput {

    @Field(() => SubsidyRequestWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyRequestWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>;

    @Field(() => SubsidyRequestCreateWithoutInstitutionInput, {nullable:false})
    @Type(() => SubsidyRequestCreateWithoutInstitutionInput)
    create!: SubsidyRequestCreateWithoutInstitutionInput;
}
